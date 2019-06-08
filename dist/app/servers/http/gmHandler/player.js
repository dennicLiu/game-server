"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    return new httpPlayer(app);
}
exports.default = default_1;
class httpPlayer {
    constructor(app) {
        this.app = app;
        this.util = app;
        this.mongo = app.get("mongoClient");
        this.playerMgr = app.get("playerMgr");
        this.header = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With",
            "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
            "X-Powered-By": "3.2.1",
            "Content-Type": "Application/json;charset=utf-8"
        };
    }
    /**
     * New client entry chat server.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next stemp callback
     * @return {Void}
     */
    async recharge(req, res, params) {
        //do someThing
        res.setHeader(this.header, 200);
        res.end({ code: 200, msg: "hello" });
    }
}
exports.httpPlayer = httpPlayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwL3NlcnZlcnMvaHR0cC9nbUhhbmRsZXIvcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsbUJBQXlCLEdBQWdCO0lBQ3JDLE9BQU8sSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUZELDRCQUVDO0FBRUQ7SUFPSSxZQUFvQixHQUFnQjtRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWLDZCQUE2QixFQUFFLEdBQUc7WUFDbEMsOEJBQThCLEVBQUUsa0JBQWtCO1lBQ2xELDhCQUE4QixFQUFFLDZCQUE2QjtZQUM3RCxjQUFjLEVBQUUsT0FBTztZQUN2QixjQUFjLEVBQUUsZ0NBQWdDO1NBQ25ELENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBTyxFQUFFLEdBQU8sRUFBQyxNQUFVO1FBQ3RDLGNBQWM7UUFDZCxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDbkMsQ0FBQztDQUdKO0FBbkNELGdDQW1DQyJ9