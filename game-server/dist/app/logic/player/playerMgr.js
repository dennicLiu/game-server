"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const pinus_1 = require("pinus");
const pinus_logger_1 = require("pinus-logger");
const logger = pinus_logger_1.getLogger("game", path.basename(__filename));
//
class playerMgr {
    constructor(app) {
        this.session = pinus_1.BackendSession;
        this.app = app;
        this.data = app.get("dataApi");
        this.cache = {};
        this.redisClient = app.get("redis");
        this.cfgCache = {};
        this.mongo = app.get("mongoClient");
    }
    async getPlayerInfo(uid) {
        let self = this;
        let userData = await self.redisClient.hget("user", uid);
        if (userData && userData.length && userData.length > 0) {
            return userData;
        }
        userData = await self.mongo.GetModel("user").find({ uid: uid });
        return userData;
    }
    async createPlayer(uid, sid, name) {
        let self = this;
        let model = self.mongo.GetModel("user");
        let obj = {
            uid: uid,
            name: name,
            avatar: 21401,
            level: 1,
            serverId: sid,
            exp: 0,
            sdkInfo: {},
            gold: 0,
            gem: 0,
            totalRecharge: 0
        };
        let ret = await model.create(obj);
        let heroList = await self.giveHero(uid, 21401, ret);
        self.cache[uid] = ret;
        await self.redisClient.hmset("user", ret);
        return {
            heroList: heroList,
            userData: ret
        };
    }
    async giveHero(uid, heroId, userData) {
        let ret;
        if (this.cfgCache["hero"] && this.cfgCache["hero"][heroId]) {
            ret = this.cfgCache["hero"][heroId];
        }
        else {
            ret = await this.data.findById(heroId, "hero");
            if (!this.cfgCache["hero"]) {
                this.cfgCache["hero"] = {};
            }
            this.cfgCache["hero"][heroId] = ret;
        }
        let obj = {
            id: heroId,
            name: ret.name,
            uid: uid,
            quality: ret.star,
            level: 1,
            activie_skill_lv: 1,
            passive_skill1_lv: 0,
            passive_skill2_lv: 0,
            passive_skill3_lv: 0,
            ctime: 1
        };
        let model = this.mongo.GetModel("hero");
        let heroData = await model.create(obj);
        if (!userData.hero) {
            userData.hero = [];
        }
        userData.hero.push(heroData._id);
        await this.mongo.GetModel("user").updateOne({ uid: uid }, { hero: userData.hero });
        await this.redisClient.hmset("hero", obj);
        return heroData;
    }
}
exports.initMgr = function (app) {
    try {
        return new playerMgr(app);
    }
    catch (e) {
        logger.error("initMgr exception:", e);
        return null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyTWdyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL2xvZ2ljL3BsYXllci9wbGF5ZXJNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0IsaUNBQWtEO0FBQ2xELCtDQUF5QztBQUN6QyxNQUFNLE1BQU0sR0FBTSx3QkFBUyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFFOUQsRUFBRTtBQUNGO0lBU0ksWUFBWSxHQUFlO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQWMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxHQUFJLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRU0sS0FBSyxDQUFFLGFBQWEsQ0FBQyxHQUFPO1FBQy9CLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztRQUNyQixJQUFJLFFBQVEsR0FBRyxNQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQztRQUN4RCxJQUFHLFFBQVEsSUFBRSxRQUFRLENBQUMsTUFBTSxJQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO1lBQzVDLE9BQU8sUUFBUSxDQUFBO1NBQ2xCO1FBQ0QsUUFBUSxHQUFHLE1BQU8sSUFBSSxDQUFDLEtBQUssQ0FB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