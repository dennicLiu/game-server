import * as fs  from  "fs";
import * as path from "path";
import { Application } from 'pinus';
import { getLogger } from 'pinus-logger';
import {comUtil} from "../importUtil/componentImport";
const logger   =  getLogger("game",path.basename(__filename));


class comMgr {
    public  comClient:any;
    public  app:Application;
    public  comUtil:any;
    constructor  (app:Application){
        this.comClient =  {};
        this.app =  app;
        this.comUtil =comUtil;
        this.loadComs();
    }

    async loadComs():Promise<any>{
        let self  = this;
        let basePath = path.resolve(__dirname,"../components");
        let files = await fs.readdirSync(basePath);
        files.map((one:any)=>{
            let filename:string = one.split(".")[0];
            self.comClient[filename] = self.comUtil[filename];
            // logger.info("%j 组件加载完成",filename);
            // console.log("%j 组件加载完成",filename)
        });
        this.appLoad()
    }

    getComp(name:string):any{
        if(this.comClient.hasOwnProperty(name)){
            return  this.comClient[name]
        }
        let client  = this.comUtil[name];
        this.comClient[name] = client;
        return client
    }

    appLoad(){
        let self  = this;
        Promise.all(Object.keys(this.comClient).map((one:any)=>{
            self.app.load(self.comUtil[one])
        }));
        logger.info("组件加载完成")
    }
}


/**
 * 绑定模块外部方法
 */
exports.registerCom = function (app:Application):any {
        let coms = new comMgr(app);
        return coms;
};

