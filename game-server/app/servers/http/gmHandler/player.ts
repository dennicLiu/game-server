import { Application, BackendSession} from 'pinus';


export default function (app: Application) {
    return new httpPlayer(app);
}

export class httpPlayer {
    public util :any;
    public sign : "97385ec52154f35a";
    public mongo:any;
    public  playerMgr:any;
    public header:any;

    constructor(private app: Application) {
        this.util = app;
        this.mongo= app.get("mongoClient");
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
    async recharge(req:any, res:any,params:any) {
        //do someThing
        res.setHeader(this.header,200);
        res.end({code:200,msg:"hello"})
    }


}