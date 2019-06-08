"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const mongoose = require("mongoose");
const pinus_logger_1 = require("pinus-logger");
const SchemaMgr_1 = require("./SchemaMgr");
const logger = pinus_logger_1.getLogger("game", path.basename(__filename));
class DBConnection {
    constructor(app, type, id, cfg) {
        this.app = app;
        this.dbInfo = {
            "DBUserName": cfg.DBUserName,
            "DBUserPsw": cfg.DBUserPsw,
            "DBIP": cfg.DBIP,
            "DBPort": cfg.DBPort,
            "DBName": cfg.DBName
        };
        this.id = id;
        this.initConn();
    }
    async initConn() {
        this.schemaMgr = await SchemaMgr_1.schema();
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
        this.models = {};
        this.isConnecting = true;
        //生产环境
        // var dbUri = "mongodb://" + this.dbInfo.DBUserName + ":" + this.dbInfo.DBUserPsw + "@" + this.dbInfo.DBIP + ":" + this.dbInfo.DBPort + "/" + this.dbInfo.DBName;
        // var options = {
        //     auth: {
        //         authSource: 'admin'
        //     }
        // };
        //测试环境
        let dbUrl = "mongodb://" + this.dbInfo.DBIP + ":" + this.dbInfo.DBPort + "/" + this.dbInfo.DBName;
        let options = {
            useNewUrlParser: true,
            useCreateIndex: true
        };
        this.unRegEvent();
        this.db = mongoose.createConnection(dbUrl, options);
        this.regEvent();
        this.loadSchema();
    }
    loadSchema() {
        let self = this;
        let schemas = self.schemaMgr.getSchemas();
        Object.keys(schemas).map(v => {
            let sc = v.split("_")[1];
            self.models[v] = self.db.model(sc.toLowerCase(), schemas[v]);
        });
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
    OnError(error) {
        this.isConnecting = false;
        if (error) {
            logger.error(this.app.getCurServer().id + "[" + this.id + "]Connection OnError:%s", JSON.stringify(error));
            console.log(this.app.getCurServer().id + "[" + this.id + "]mongoose db OnError", JSON.stringify(error));
        }
    }
    /**
     * 链接数据库成功回调
     */
    OnConnected(error) {
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
    OnDisconnected(error) {
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
    OnReconnecting() {
        logger.info(this.app.getCurServer().id + "[" + this.id + "] auto reconnecting....");
    }
    /**
     * 獲取模板
     * @param tableName
     * @returns {*}
     * @constructor
     */
    GetModel(tableName) {
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
exports.CreateDBConnection = function (app, type, id, cfg) {
    try {
        var conn = new DBConnection(app, type, id, cfg);
        return conn;
    }
    catch (e) {
        logger.error("CreateDBConnection exception:", e);
        return null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYW8vY29ubi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3QixxQ0FBb0M7QUFFcEMsK0NBQXlDO0FBQ3pDLDJDQUFrQztBQUNsQyxNQUFNLE1BQU0sR0FBTSx3QkFBUyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFFOUQ7SUFTSSxZQUFZLEdBQWUsRUFBQyxJQUFXLEVBQUMsRUFBUyxFQUFDLEdBQU87UUFDckQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1YsWUFBWSxFQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQzNCLFdBQVcsRUFBQyxHQUFHLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUMsR0FBRyxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUMsR0FBRyxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFDLEdBQUcsQ0FBQyxNQUFNO1NBQ3RCLENBQUM7UUFDRixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sa0JBQU0sRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcs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