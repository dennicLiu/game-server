"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pinus_1 = require("pinus");
const routeUtil = require("./app/util/routeUtil");
const preload_1 = require("./preload");
//import {createRobotPlugin} from 'pinus-robot-plugin';
const item_1 = require("./app/components/item");
const loadConfig = require("./app/util/loadConfig");
const componentsMgr = require("./app/manager/componentsMgr");
const db_1 = require("./app/dao/static/db");
const mongo = require("./app/dao/conn");
const responseUtil_1 = require("./app/util/responseUtil");
const pMgr = require("./app/logic/player/playerMgr");
const redis = require("./app/cache/redis");
const logicImport_1 = require("./app/importUtil/logicImport");
const _pinus = require("pinus");
const filePath = _pinus.FILEPATH;
filePath.MASTER = '/config/master';
filePath.SERVER = '/config/servers';
filePath.CRON = '/config/crons';
filePath.LOG = '/config/log4js';
filePath.SERVER_PROTOS = '/config/serverProtos';
filePath.CLIENT_PROTOS = '/config/clientProtos';
filePath.MASTER_HA = '/config/masterha';
filePath.LIFECYCLE = '/lifecycle';
filePath.SERVER_DIR = '/app/servers/';
filePath.CONFIG_DIR = '/config';
const adminfilePath = _pinus.DEFAULT_ADMIN_PATH;
adminfilePath.ADMIN_FILENAME = 'adminUser';
adminfilePath.ADMIN_USER = 'config/adminUser';
/**
 *  替换全局Promise
 *  自动解析sourcemap
 *  捕获全局错误
 */
preload_1.preload();
/**
 * Init app for client.
 */
let app = pinus_1.pinus.createApp();
app.set('name', 'tyrannosaurus');
// app configure
app.configure('production|development', function () {
    // route configures
    let redisClient = redis;
    app.route('game', routeUtil.game);
    app.set("dataApi", loadConfig, true);
    app.set("resUtil", responseUtil_1.initUtil, true);
    app.set("redis", redisClient.CreateRedisClient(), true);
    // filter configures
    app.filter(new pinus_1.pinus.filters.timeout());
});
// app configuration
app.configure('production|development', 'connector', function () {
    app.set('connectorConfig', {
        connector: pinus_1.pinus.connectors.hybridconnector,
        heartbeat: 30,
        useDict: true,
        useProtobuf: true,
        handshake: function (msg, cb) {
            cb(null, {});
        }
    });
    let monclient;
    monclient = mongo;
    let conn = monclient.CreateDBConnection(app, "connector", 1, db_1.dbCfg.mongo);
    app.set("account", conn);
});
app.configure('production|development', 'gate', function () {
    app.set('connectorConfig', {
        connector: pinus_1.pinus.connectors.hybridconnector,
        useProtobuf: true
    });
});
app.configure('production|development', 'game', async function () {
    let components;
    let monclient;
    let playerMgr;
    let cfg;
    cfg = db_1.dbCfg;
    components = componentsMgr;
    monclient = mongo;
    let comms = components.registerCom(app);
    app.set("comms", comms, true);
    let conn = monclient.CreateDBConnection(app, "game", app.getServerId(), cfg.mongo);
    app.set("mongoClient", conn);
    playerMgr = pMgr;
    let p = playerMgr.initMgr(app);
    app.set("playerMgr", p, true);
    // app.set("redis",redisUtil,true);
    // let Db:any = db;
    // Db.test(conn);
    app.load(item_1.default);
});
app.configure('production|development', 'http', function () {
    let monclient;
    monclient = mongo;
    let cfg;
    cfg = db_1.dbCfg;
    let conn = monclient.CreateDBConnection(app, "http", 1, cfg.mongo);
    app.set("gmDB", conn);
    logicImport_1.logic.httpserver.initGmServer();
});
app.configure('production|development', 'name', function () {
    let monclient;
    monclient = mongo;
    let cfg;
    cfg = db_1.dbCfg;
    let conn = monclient.CreateDBConnection(app, "name", 1, cfg.mongo);
    app.set("nameDB", conn);
});
app.configure('development', function () {
    // enable the system monitor modules
    app.enable('systemMonitor');
});
if (app.isMaster()) {
    // app.use(createRobotPlugin({scriptFile: __dirname + '/robot/robot.ts'}));
}
// start app
app.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQThCO0FBQzlCLGtEQUFtRDtBQUNuRCx1Q0FBb0M7QUFDcEMsdURBQXVEO0FBQ3ZELGdEQUF5QztBQUN6QyxvREFBb0Q7QUFDcEQsNkRBQStEO0FBQy9ELDRDQUEyQztBQUMzQyx3Q0FBdUM7QUFHdkMsMERBQWtEO0FBQ2xELHFEQUFxRDtBQUNyRCwyQ0FBMkM7QUFDM0MsOERBQW9EO0FBRXBELGdDQUFpQztBQUNqQyxNQUFNLFFBQVEsR0FBSSxNQUFjLENBQUMsUUFBUSxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7QUFDbkMsUUFBUSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztBQUNwQyxRQUFRLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztBQUNoQyxRQUFRLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDO0FBQ2hDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsc0JBQXNCLENBQUM7QUFDaEQsUUFBUSxDQUFDLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztBQUNoRCxRQUFRLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO0FBQ3hDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0FBQ2xDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBRWhDLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRCxhQUFhLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztBQUMzQyxhQUFhLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO0FBQzlDOzs7O0dBSUc7QUFDSCxpQkFBTyxFQUFFLENBQUM7QUFFVjs7R0FFRztBQUNILElBQUksR0FBRyxHQUFHLGFBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUM1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