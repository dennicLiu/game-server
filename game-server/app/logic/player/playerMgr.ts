import * as path from 'path';
import { Application,BackendSession} from 'pinus';
import { getLogger } from 'pinus-logger';
const logger   =  getLogger("game",path.basename(__filename));

//
class playerMgr {
    public  app:Application;
    public  data:any;
    public  cache:any;
    public  redisClient:any;
    public  cfgCache:any;
    public  mongo:any;
    public  session:any;

    constructor(app:Application){
        this.session = BackendSession;
        this.app =  app;
        this.data =  app.get("dataApi");
        this.cache = {};
        this.redisClient = app.get("redis");
        this.cfgCache = {};
        this.mongo = app.get("mongoClient")
    }

    public async  getPlayerInfo(uid:any){
        let self :any = this;
        let userData = await  self.redisClient.hget("user",uid);
        if(userData&&userData.length&&userData.length>0){
            return userData
        }
        userData = await  self.mongo.GetModel("user").find({uid:uid});
        return userData
    }

    public async createPlayer(uid:any,sid:any,name:any){
        let self:any =this;
        let model  = self.mongo.GetModel("user");
        let obj  = {
            uid:uid,
            name:name,
            avatar:21401,
            level:1,
            serverId:sid,
            exp:0,
            sdkInfo:{},
            gold:0,
            gem:0,
            totalRecharge:0
        };
        let ret = await model.create(obj);
        let  heroList = await self.giveHero(uid,21401,ret);
        self.cache[uid] = ret;
        await  self.redisClient.hmset("user",ret);
        return {
            heroList:heroList,
            userData:ret
        }
    }

    async giveHero(uid:any,heroId:any,userData:any){
        let ret :any;
        if(this.cfgCache["hero"]&&this.cfgCache["hero"][heroId]){
            ret = this.cfgCache["hero"][heroId]
        }else {
            ret  = await this.data.findById(heroId,"hero");
            if(!this.cfgCache["hero"]){
                this.cfgCache["hero"] ={}
            }
            this.cfgCache["hero"][heroId] = ret
        }
        let obj = {
            id:heroId,
            name:ret.name,
            uid:uid,
            quality:ret.star,
            level:1,
            activie_skill_lv:1,
            passive_skill1_lv:0,
            passive_skill2_lv:0,
            passive_skill3_lv:0,
            ctime:1
        };
        let model  = this.mongo.GetModel("hero");
        let heroData = await  model.create(obj);
        if(!userData.hero){userData.hero =[]}
        userData.hero.push(heroData._id);
        await this.mongo.GetModel("user").updateOne({uid:uid},{hero:userData.hero});
        await  this.redisClient.hmset("hero",obj);
        return  heroData
    }
}

exports.initMgr = function (app:Application):any {
    try {
        return new playerMgr(app);
    }
    catch (e) {
        logger.error("initMgr exception:", e);
        return null;
    }
};

