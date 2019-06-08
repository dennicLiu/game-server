import * as path from 'path';
import * as mongoose from "mongoose"
import { Application} from 'pinus';
import { getLogger } from 'pinus-logger';
import {schema} from "./SchemaMgr"
const logger   =  getLogger("game",path.basename(__filename));

class DBConnection {
    public db:any;
    public models:any;
    public isConnecting:boolean;
    public schemaMgr:any;
    public dbInfo:any;
    public app:Application;
    public id:number;

    constructor(app:Application,type:string,id:number,cfg:any){
        this.app = app;
        this.dbInfo = {
            "DBUserName":cfg.DBUserName,
            "DBUserPsw":cfg.DBUserPsw,
            "DBIP":cfg.DBIP,
            "DBPort":cfg.DBPort,
            "DBName":cfg.DBName
        };
        this.id = id;
        this.initConn()
    }

    async initConn() {
        this.schemaMgr = await schema();
        this.OnError = this.OnError.bind(this);
        this.OnConnected = this.OnConnected.bind(this);
        this.OnDisconnected = this.OnDisconnected.bind(this);
        this.OnReconnecting = this.OnReconnecting.bind(this);
        this.doConnect();
    }

    /**
     * 设置数据库链接信息
     */
    doConnect() {
        this.models={};
        this.isConnecting = true;
        //生产环境
        // var dbUri = "mongodb://" + this.dbInfo.DBUserName + ":" + this.dbInfo.DBUserPsw + "@" + this.dbInfo.DBIP + ":" + this.dbInfo.DBPort + "/" + this.dbInfo.DBName;
        // var options = {
        //     auth: {
        //         authSource: 'admin'
        //     }
        // };
        //测试环境
        let dbUrl:any =  "mongodb://" + this.dbInfo.DBIP+":"+this.dbInfo.DBPort+"/"+this.dbInfo.DBName;
        let options:any  = {
            useNewUrlParser: true,
            useCreateIndex: true
        };
        this.unRegEvent();
        this.db = mongoose.createConnection(dbUrl, options);
        this.regEvent();
        this.loadSchema();

    }

    loadSchema(){
        let self:any =this;
        let schemas  =  self.schemaMgr.getSchemas();
        Object.keys(schemas).map(v=>{
            let sc  = v.split("_")[1];
            self.models[v] = self.db.model(sc.toLowerCase(), schemas[v]);
        })

    }

    unRegEvent() {
        if (!this.db) {
            return;
        }
        this.db.removeAllListeners('error');
        this.db.removeAllListeners("connected");
        this.db.removeAllListeners("disconnected");
        this.db.removeAllListeners("reconnected");
    }

    regEvent() {
        this.db.on('error', this.OnError);
        this.db.on("connected", this.OnConnected);
        this.db.on("disconnected", this.OnDisconnected);
        this.db.on("reconnected", this.OnReconnecting);
    }

    /**
     * 链接数据库错误回调
     */
    OnError(error:any){
        this.isConnecting = false;
        if (error) {
            logger.error(this.app.getCurServer().id + "[" + this.id + "]Connection OnError:%s", JSON.stringify(error));
            console.log(this.app.getCurServer().id + "[" + this.id + "]mongoose db OnError", JSON.stringify(error));
        }
    }

    /**
     * 链接数据库成功回调
     */
    OnConnected(error:any) {
        this.isConnecting = false;
        if (error) {
            logger.error(this.app.getCurServer().id + "[" + this.id + "]mongoose db connected failed!", JSON.stringify(error));
            this.db = null;
        }
        else {
            logger.info(JSON.stringify(this.app.getCurServer().id) + "[" + this.id + "]mongoose db connected OK!");
        }
    }

    /**
     * 断开数据库链接回调
     */
    OnDisconnected(error:any) {
        this.isConnecting = false;
        logger.error("断开数据库链接", error);
        if (error) {
            logger.error(this.app.getCurServer().id + "[" + this.id + "] OnDisconnected error:%s", JSON.stringify(error));
        }
    }

    /**
     * 数据库自动重连中
     * @constructor
     */
    OnReconnecting () {
        logger.info(this.app.getCurServer().id + "[" + this.id + "] auto reconnecting....");
    }

    /**
     * 獲取模板
     * @param tableName
     * @returns {*}
     * @constructor
     */
    GetModel(tableName:string) {
        if (this.models.hasOwnProperty(tableName)) {
            return this.models[tableName];
        }

        var schema = this.schemaMgr.getSchemaByName("zc_" + tableName);
        if (!schema) {
            return schema;
        }
        this.models[tableName] = this.db.model(tableName.toLowerCase(), schema);
        return this.models[tableName];
    }

    isConnected() {
        return this.db.ready === 2; //connected
    }

}



/**
 * 绑定模块外部方法
 */
exports.CreateDBConnection = function (app:Application,type:string, id:number, cfg:any):any {
    try {
        var conn = new DBConnection(app,type, id, cfg);
        return conn;
    }
    catch (e) {
        logger.error("CreateDBConnection exception:", e);
        return null;
    }
};