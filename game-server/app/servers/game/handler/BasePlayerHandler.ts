import {Application} from "pinus/lib/index";

export class BasePlayerHandler {
    protected util :Application;
    public mongo:any;
    public  playerMgr:any;

    constructor(app: Application) {
        this.util = app;
        this.mongo= app.get("mongoClient");
        this.playerMgr = app.get("playerMgr")
    }
}