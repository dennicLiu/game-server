"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const pinus_logger_1 = require("pinus-logger");
const logger = pinus_logger_1.getLogger("game", path.basename(__filename));
function default_1(app) {
    return new EntryHandler(app);
}
exports.default = default_1;
class EntryHandler {
    constructor(app) {
        this.app = app;
        this.uitl = app;
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
    async enter(msg, session) {
        try {
            let self = this;
            let sid = msg.sid;
            let uid = msg.uid;
            let sessionService = self.app.get('sessionService');
            // duplicate log in
            if (!!sessionService.getByUid(uid)) {
                return this.resUtil.fail("登录失败", "LOGIN_FAIL");
            }
            if (!self.uitl || !self.uitl.rpc || !self.uitl.rpc.name) {
                // 后期捕捉起服完成标志
                return this.resUtil.fail("登录失败", "SERVER_NOT_READY");
            }
            let client = self.uitl.get("account");
            let model = client.GetModel("account");
            let ret = await model.find({ account: uid, server: sid });
            let newUid;
            if (ret.length > 0) {
                newUid = ret[0].uid;
            }
            else {
                let num = await model.countDocuments({});
                newUid = num + 1 + 10000000;
                let obj = {
                    account: uid,
                    uid: newUid,
                    server: sid
                };
                await model.create(obj);
            }
            await session.abind(newUid);
            session.set("uid", newUid);
            session.set("sid", sid);
            await session.apushAll();
            session.on('closed', this.onUserLeave.bind(this));
            return this.resUtil.success("登录成功", "LOGIN_SUCCESS");
        }
        catch (e) {
            logger.info("登录失败 , reason:%s", e);
            return this.resUtil.fail("登录失败", "LOGIN_FAIL");
        }
    }
    /**
     * User log out handler
     *
     * @param {Object} app current application
     * @param {Object} session current session object
     *
     */
    onUserLeave(session) {
        if (!session || !session.uid) {
            return;
        }
    }
}
exports.EntryHandler = EntryHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwL3NlcnZlcnMvY29ubmVjdG9yL2hhbmRsZXIvZW50cnlIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNkJBQTZCO0FBQzdCLCtDQUF5QztBQUN6QyxNQUFNLE1BQU0sR0FBTSx3QkFBUyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFFOUQsbUJBQXlCLEdBQWdCO0lBQ3JDLE9BQU8sSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUZELDRCQUVDO0FBRUQ7SUFHSSxZQUFvQixHQUFnQjtRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUUsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFHRDs7Ozs7OztPQU9HO0lBQ0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFpQyxFQUFFLE9BQXdCO1FBQ25FLElBQUc7WUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUNsQixJQUFJLEdBQUcsR0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3RCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFcEQsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLFlBQVksQ0FBQyxDQUFBO2FBQ2hEO1lBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQztnQkFDL0MsYUFBYTtnQkFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxrQkFBa0IsQ0FBQyxDQUFBO2FBQ3REO1lBRUQsSUFBSSxNQUFNLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkMsSUFBSSxLQUFLLEdBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4QyxJQUFLLEdBQUcsR0FBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksTUFBVSxDQUFDO1lBQ2YsSUFBRyxHQUFHLENBQUMsTUFBTSxHQUFFLENBQUMsRUFBQztnQkFDYixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTthQUN0QjtpQkFBSTtnQkFDRCxJQUFJLEdBQUcsR0FBSSxNQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sR0FBRyxHQUFHLEdBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBRTtnQkFDekIsSUFBSSxHQUFHLEdBQUc7b0JBQ04sT0FBTyxFQUFDLEdBQUc7b0JBQ1gsR0FBRyxFQUFDLE1BQU07b0JBQ1YsTUFBTSxFQUFDLEdBQUc7aUJBQ2IsQ0FBQztnQkFDRixNQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUI7WUFFRCxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsTUFBTSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxlQUFlLENBQUMsQ0FBQTtTQUN0RDtRQUFBLE9BQU8sQ0FBQyxFQUFFO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxPQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxZQUFZLENBQUMsQ0FBQTtTQUNqRDtJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxXQUFXLENBQUMsT0FBd0I7UUFDaEMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDMUIsT0FBTztTQUNWO0lBQ0wsQ0FBQztDQUNKO0FBM0VELG9DQTJFQyJ9