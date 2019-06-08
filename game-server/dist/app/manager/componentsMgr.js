"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const pinus_logger_1 = require("pinus-logger");
const componentImport_1 = require("../importUtil/componentImport");
const logger = pinus_logger_1.getLogger("game", path.basename(__filename));
class comMgr {
    constructor(app) {
        this.comClient = {};
        this.app = app;
        this.comUtil = componentImport_1.comUtil;
        this.loadComs();
    }
    async loadComs() {
        let self = this;
        let basePath = path.resolve(__dirname, "../components");
        let files = await fs.readdirSync(basePath);
        files.map((one) => {
            let filename = one.split(".")[0];
            self.comClient[filename] = self.comUtil[filename];
            // logger.info("%j 组件加载完成",filename);
            // console.log("%j 组件加载完成",filename)
        });
        this.appLoad();
    }
    getComp(name) {
        if (this.comClient.hasOwnProperty(name)) {
            return this.comClient[name];
        }
        let client = this.comUtil[name];
        this.comClient[name] = client;
        return client;
    }
    appLoad() {
        let self = this;
        Promise.all(Object.keys(this.comClient).map((one) => {
            self.app.load(self.comUtil[one]);
        }));
        logger.info("组件加载完成");
    }
}
/**
 * 绑定模块外部方法
 */
exports.registerCom = function (app) {
    let coms = new comMgr(app);
    return coms;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50c01nci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tYW5hZ2VyL2NvbXBvbmVudHNNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBMkI7QUFDM0IsNkJBQTZCO0FBRTdCLCtDQUF5QztBQUN6QyxtRUFBc0Q7QUFDdEQsTUFBTSxNQUFNLEdBQU0sd0JBQVMsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBRzlEO0lBSUksWUFBYyxHQUFlO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUksR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUUseUJBQU8sQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRO1FBQ1YsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDO1FBQ2pCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBTyxFQUFDLEVBQUU7WUFDakIsSUFBSSxRQUFRLEdBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEQscUNBQXFDO1lBQ3JDLG9DQUFvQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVc7UUFDZixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ25DLE9BQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUMvQjtRQUNELElBQUksTUFBTSxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDOUIsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLElBQUksR0FBSSxJQUFJLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFPLEVBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDcEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDekIsQ0FBQztDQUNKO0FBR0Q7O0dBRUc7QUFDSCxPQUFPLENBQUMsV0FBVyxHQUFHLFVBQVUsR0FBZTtJQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixPQUFPLElBQUksQ0FBQztBQUNwQixDQUFDLENBQUMifQ==