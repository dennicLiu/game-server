"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const key_1 = require("../dao/static/key");
const pinus_logger_1 = require("pinus-logger");
const GameConfig_1 = require("../init/GameConfig");
const logger = pinus_logger_1.getLogger("game", path.basename(__filename));
class loadCfg {
    constructor() {
        this.tables = [];
        this.constKeyMap = key_1.config;
        this.totalTable = {};
        this.constKeyMap = key_1.config;
        this.baseData = GameConfig_1.baseJson;
        this.startLoad();
    }
    test() {
        let self = this;
        setTimeout(() => {
            let ret = this.findById(21401, "hero");
        }, 2000);
    }
    async startLoad() {
        let self = this;
        // await fs.readFileSync(path.resolve(__dirname,"../init/GameConfig.ts11"));
        // if(typeof baseData == "string"){baseData =  JSON.parse(baseData)}
        Object.keys(self.baseData).map((key) => {
            let fixData = self.arrToJson(self.constKeyMap[key], key);
            self.totalTable[key] = fixData;
            console.log("%s 表已加载完成", key);
        });
    }
    async findById(id, tableName) {
        let self = this;
        // let tData:any =  self.totalTable[tableName];
        if (self.totalTable[tableName][id]) {
            return self.totalTable[tableName][id];
        }
        let resObj = self.arrToJson(self.constKeyMap[tableName], tableName);
        self.totalTable[tableName] = resObj;
        return resObj[id];
    }
    async findAll(tableName) {
        let self = this;
        return self.totalTable[tableName];
    }
    arrToJson(key, filename) {
        let self = this;
        let obj = {};
        if (!key || key == "") {
            return self.totalTable[filename];
        }
        if (!self.totalTable[filename]) {
            self.totalTable[filename] = self.baseData[filename];
        }
        self.totalTable[filename].map((row) => {
            if (!obj.hasOwnProperty(row[key])) {
                obj[row[key]] = row;
            }
            logger.info("------json 生成出错------");
        });
        return obj;
    }
}
module.exports = new loadCfg();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZENvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC91dGlsL2xvYWRDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0IsMkNBQTBDO0FBQzFDLCtDQUF5QztBQUN6QyxtREFBNEM7QUFDNUMsTUFBTSxNQUFNLEdBQU0sd0JBQVMsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBRTlEO0lBS0k7UUFIUSxXQUFNLEdBQU8sRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQU8sWUFBTSxDQUFDO1FBRzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLElBQUksR0FBTyxJQUFJLENBQUE7UUFDbkIsVUFBVSxDQUFDLEdBQUUsRUFBRTtZQUNiLElBQUksR0FBRyxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUNYLENBQUM7SUFFRixLQUFLLENBQUMsU0FBUztRQUNWLElBQUksSUFBSSxHQUFPLElBQUksQ0FBQztRQUNyQiw0RUFBNEU7UUFDNUUsb0VBQW9FO1FBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQU8sRUFBQyxFQUFFO1lBQ3RDLElBQUksT0FBTyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQU0sRUFBQyxTQUFnQjtRQUNsQyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUM7UUFDdEIsK0NBQStDO1FBQy9DLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQztZQUM5QixPQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7U0FDekM7UUFDRCxJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBSSxNQUFNLENBQUM7UUFDckMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBZ0I7UUFDMUIsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDO1FBQ2pCLE9BQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQU8sRUFBQyxRQUFZO1FBQzFCLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztRQUNyQixJQUFJLEdBQUcsR0FBUyxFQUFFLENBQUM7UUFDbkIsSUFBRyxDQUFDLEdBQUcsSUFBRSxHQUFHLElBQUUsRUFBRSxFQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ25DO1FBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUM7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFPLEVBQUMsRUFBRTtZQUNyQyxJQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztnQkFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQTthQUN0QjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQztDQUNKO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDIn0=