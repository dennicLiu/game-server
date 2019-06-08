"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    return new PlayerHandler(app);
}
exports.default = default_1;
class PlayerHandler {
    constructor(app) {
        this.app = app;
        this.util = app;
        this.mongo = app.get("mongoClient");
        this.playerMgr = app.get("playerMgr");
        this.resUtil = app.get("resUtil");
    }
    /**
     * New client entry chat server.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next stemp callback
     * @return {Void}
     */
    async p01_loadPlayer(msg, session) {
        try {
            let self = this;
            let uid = session.get("uid");
            let sid = session.get("sid");
            // if(msg.sign !=this.sign){
            //     return this.resUtil.fail("验证数据失败","VERIFY FAIL");
            // }
            let userData = await self.playerMgr.getPlayerInfo(uid);
            let backobj = {
                code: 200,
                itemData: {},
                userData: userData[0],
                heroList: {}
            };
            if (!userData || userData.length == 0) {
                let name = await self.util.rpc.name.nameRemote.register.route(session)(sid);
                let ret = await self.playerMgr.createPlayer(uid, sid, name);
                backobj.userData = ret.userData;
                backobj.heroList = ret.heroList;
                return backobj;
            }
            // 如果是老号
            let test = await self.mongo.GetModel("user").findOne({ uid: uid }).populate(["hero", "item"]);
            backobj.heroList = test.hero;
            backobj.itemData = test.item;
            return backobj;
        }
        catch (e) {
            return this.resUtil.fail("加载用户数据失败", "LOAD_DATA_FAIL");
        }
    }
    async p02_ping(msg, session) {
        return { timestamp: msg.timestamp, server_time: new Date().getTime() };
    }
    /**
     * User log out handler
     *
     * @param {Object} app current application
     * @param {Object} session current session object
     *
     */
    onUserLeave(session) {
    }
}
exports.PlayerHandler = PlayerHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicDAxX3BsYXllckhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvc2VydmVycy9nYW1lL2hhbmRsZXIvcDAxX3BsYXllckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxtQkFBeUIsR0FBZ0I7SUFDckMsT0FBTyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRkQsNEJBRUM7QUFFRDtJQU1JLFlBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQVEsRUFBRSxPQUF1QjtRQUNsRCxJQUFHO1lBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksR0FBRyxHQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxHQUFHLEdBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQiw0QkFBNEI7WUFDNUIsd0RBQXdEO1lBQ3hELElBQUk7WUFDSixJQUFLLFFBQVEsR0FBSSxNQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksT0FBTyxHQUFHO2dCQUNWLElBQUksRUFBQyxHQUFHO2dCQUNSLFFBQVEsRUFBQyxFQUFFO2dCQUNYLFFBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixRQUFRLEVBQUMsRUFBRTthQUNkLENBQUM7WUFFRixJQUFHLENBQUMsUUFBUSxJQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUcsQ0FBQyxFQUFDO2dCQUM5QixJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxHQUFHLEdBQVEsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsT0FBTyxPQUFPLENBQUE7YUFDakI7WUFFRCxRQUFRO1lBQ1IsSUFBSSxJQUFJLEdBQUssTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1RixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDN0IsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzdCLE9BQU8sT0FBTyxDQUFBO1NBQ2pCO1FBQUEsT0FBTyxDQUFDLEVBQUU7WUFDUCxPQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFBO1NBQ3pEO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBdUIsRUFBRSxPQUF1QjtRQUMzRCxPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FBQTtJQUN2RSxDQUFDO0lBTUQ7Ozs7OztPQU1HO0lBQ0gsV0FBVyxDQUFDLE9BQXVCO0lBRW5DLENBQUM7Q0FDSjtBQXpFRCxzQ0F5RUMifQ==