import { pinus } from 'pinus';
import * as  routeUtil from './app/util/routeUtil';
import { preload } from './preload';
//import {createRobotPlugin} from 'pinus-robot-plugin';
import item from "./app/components/item";
import * as loadConfig from "./app/util/loadConfig";
import  * as componentsMgr  from "./app/manager/componentsMgr";
import {dbCfg}  from "./app/dao/static/db";
import * as mongo from "./app/dao/conn"
import * as db  from  "./app/test/db"

import {initUtil}  from  "./app/util/responseUtil"
import * as pMgr from  "./app/logic/player/playerMgr"
import * as redis from  "./app/cache/redis"
import {logic}  from  "./app/importUtil/logicImport"

import _pinus = require('pinus');
const filePath = (_pinus as any).FILEPATH;
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
preload();

/**
 * Init app for client.
 */
let app = pinus.createApp();
app.set('name', 'tyrannosaurus');


// app configure
app.configure('production|development', function () {
    // route configures
    let redisClient:any = redis;
    app.route('game', routeUtil.game);
    app.set("dataApi",loadConfig,true);
    app.set("resUtil",initUtil,true);
    app.set("redis",redisClient.CreateRedisClient(),true);
    // filter configures
    app.filter(new pinus.filters.timeout());
});

// app configuration
app.configure('production|development', 'connector', function () {
    app.set('connectorConfig',
        {
            connector: pinus.connectors.hybridconnector,
            heartbeat: 30,
            useDict: true,
            useProtobuf: true,
            handshake:function (msg:any,cb:any) {
                cb(null,{})
            }
        });

    let monclient:any;
    monclient = mongo;
    let conn:any =  monclient.CreateDBConnection(app,"connector", 1, dbCfg.mongo);
    app.set("account",conn);
});

app.configure('production|development', 'gate', function () {
    app.set('connectorConfig',
        {
            connector: pinus.connectors.hybridconnector,
            useProtobuf: true
        });
});



app.configure('production|development', 'game', async function () {
    let components:any;
    let monclient :any;
    let playerMgr:any;
    let cfg : any;
    cfg = dbCfg;
    components = componentsMgr;
    monclient = mongo;
    let comms  = components.registerCom(app);
    app.set("comms",comms,true);
    let conn:any =  monclient.CreateDBConnection(app,"game", app.getServerId(), cfg.mongo);
    app.set("mongoClient",conn);
    playerMgr = pMgr;
    let p :any  =  playerMgr.initMgr(app);
    app.set("playerMgr",p,true);
    // app.set("redis",redisUtil,true);
    // let Db:any = db;
    // Db.test(conn);
    app.load(item);
});

app.configure('production|development', 'http', function () {
    let monclient :any;
    monclient = mongo;
    let cfg : any;
    cfg = dbCfg;
    let conn:any =  monclient.CreateDBConnection(app,"http", 1, cfg.mongo);
    app.set("gmDB",conn);
    logic.httpserver.initGmServer()
});


app.configure('production|development', 'name', function () {
    let monclient :any;
    monclient = mongo;
    let cfg : any;
    cfg = dbCfg;
    let conn:any =  monclient.CreateDBConnection(app,"name", 1, cfg.mongo);
    app.set("nameDB",conn);
});



app.configure('development', function() {
    // enable the system monitor modules
    app.enable('systemMonitor');
  });

if(app.isMaster()) {
    // app.use(createRobotPlugin({scriptFile: __dirname + '/robot/robot.ts'}));
}

// start app
app.start();
