import { Application, BackendSession} from 'pinus';


export default function (app: Application) {
    return new PlayerHandler(app);
}

export class PlayerHandler {
    public util :any;
    public sign : "97385ec52154f35a";
    public mongo:any;
    public  playerMgr:any;
    public  resUtil:any;
    constructor(private app: Application) {
        this.util = app;
        this.mongo= app.get("mongoClient");
        this.playerMgr = app.get("playerMgr");
        this.resUtil = app.get("resUtil")
    }

    /**
     * New client entry chat server.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next stemp callback
     * @return {Void}
     */
    async p01_loadPlayer(msg: any, session: BackendSession) {
        try{
            let self = this;
            let uid  = session.get("uid");
            let sid   = session.get("sid");
            // if(msg.sign !=this.sign){
            //     return this.resUtil.fail("验证数据失败","VERIFY FAIL");
            // }
            let  userData =  await  self.playerMgr.getPlayerInfo(uid);
            let backobj = {
                code:200,
                itemData:{},
                userData:userData[0],
                heroList:{}
            };

            if(!userData||userData.length ==0){
                let name = await self.util.rpc.name.nameRemote.register.route(session)(sid);
                let ret:any  = await self.playerMgr.createPlayer(uid,sid,name);
                backobj.userData = ret.userData;
                backobj.heroList = ret.heroList;
                return backobj
            }

            // 如果是老号
            let test  =  await self.mongo.GetModel("user").findOne({uid:uid}).populate(["hero","item"]);
            backobj.heroList = test.hero;
            backobj.itemData = test.item;
            return backobj
        }catch (e) {
            return  this.resUtil.fail("加载用户数据失败","LOAD_DATA_FAIL")
        }
    }

    async p02_ping(msg: { timestamp: any }, session: BackendSession) {
        return {timestamp: msg.timestamp, server_time:new Date().getTime()}
    }





    /**
     * User log out handler
     *
     * @param {Object} app current application
     * @param {Object} session current session object
     *
     */
    onUserLeave(session: BackendSession) {

    }
}