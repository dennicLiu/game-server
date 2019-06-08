import * as path from "path";
import {config}  from "../dao/static/key";
import { getLogger } from 'pinus-logger';
import  {baseJson} from "../init/GameConfig"
const logger   =  getLogger("game",path.basename(__filename));

class  loadCfg {
    public totalTable :any;
    public  tables :any =[];
    public  constKeyMap:any = config;
    public  baseData :any ;
    constructor(){
        this.totalTable = {};
        this.constKeyMap = config;
        this.baseData = baseJson
        this.startLoad();
    }

    test(){
        let self:any = this
        setTimeout(()=>{
          let ret =  this.findById(21401,"hero");
        },2000)
    }

   async startLoad(){
        let self:any = this;
       // await fs.readFileSync(path.resolve(__dirname,"../init/GameConfig.ts11"));
       // if(typeof baseData == "string"){baseData =  JSON.parse(baseData)}
       Object.keys(self.baseData).map((key:any)=>{
           let fixData =  self.arrToJson(self.constKeyMap[key],key);
           self.totalTable[key] = fixData;
           console.log("%s 表已加载完成",key)
       });
    }

    async findById(id:any,tableName:string){
        let self :any  = this;
        // let tData:any =  self.totalTable[tableName];
        if(self.totalTable[tableName][id]){
            return  self.totalTable[tableName][id]
        }
        let resObj:any  = self.arrToJson(self.constKeyMap[tableName],tableName);
        self.totalTable[tableName] =  resObj;
        return resObj[id]
    }

    async findAll(tableName:string){
        let self  = this;
        return  self.totalTable[tableName]
    }

    arrToJson(key:any,filename:any){
        let self:any =  this;
        let obj :any =  {};
        if(!key||key==""){
            return self.totalTable[filename]
        }
        if(!self.totalTable[filename]){
            self.totalTable[filename] = self.baseData[filename]
        }
        self.totalTable[filename].map((row:any)=>{
            if(!obj.hasOwnProperty( row[key])){
                obj[row[key]] = row
            }
            logger.info("------json 生成出错------")
        });
        return obj
    }
}

module.exports = new loadCfg();