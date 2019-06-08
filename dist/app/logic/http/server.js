"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const fs = require("fs");
const path = require("path");
class httpServer {
    constructor(port = 80) {
        this.port = 0;
        this.httpHeader = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With",
            "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
            "X-Powered-By": "3.2.1",
            "Content-Type": "Application/json;charset=utf-8"
        };
        this.port = port;
        this.startServer();
        this.routes = {};
        this.parse = {
            get: this.getParamsParse.bind(this),
            post: this.postParamsParse.bind(this)
        };
    }
    async startServer() {
        let self = this;
        let dirPath = path.resolve(__dirname, "../../servers/http/gmHandler");
        let routes = await fs.readdirSync(dirPath);
        await Promise.all(routes.map(file => {
            let temp = file.split(".");
            let appendPath = path.join(dirPath, file);
            if (temp[1] === "ts") {
                self.routes[temp[0]] = require(appendPath);
            }
        }));
        // console.log(self.routes);
        http.createServer((req, res) => {
            res.writeHead(200, self.httpHeader);
            let data = "";
            req.on("data", (chunk) => {
                data += chunk;
            });
            req.on("end", async () => {
                // res.end("你好");
                await self.request(req, res, data);
            });
        }).listen(self.port);
    }
    async request(req, res, data) {
        let path = req.path.split("/");
        if (path[0] !== "game") {
            res.writeHead(200, this.httpHeader);
            res.end({ 1: 1 });
            return;
        }
        let method = req.method;
        // method.toLowerCase() ==="get"?
        // todo 校验
        let params = this.getParamsParse();
        // 拿到实例
        let handle = this.routes[path[0]];
        await handle[path[1]](req.res, params);
    }
    getParamsParse() {
    }
    postParamsParse() {
    }
}
exports.initGmServer = function () {
    return new httpServer();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL2xvZ2ljL2h0dHAvc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTRCO0FBQzVCLHlCQUEwQjtBQUMxQiw2QkFBNkI7QUFHN0I7SUFXSSxZQUFZLE9BQWEsRUFBRTtRQVZsQixTQUFJLEdBQVUsQ0FBQyxDQUFDO1FBR2hCLGVBQVUsR0FBTztZQUN0Qiw2QkFBNkIsRUFBRSxHQUFHO1lBQ2xDLDhCQUE4QixFQUFFLGtCQUFrQjtZQUNsRCw4QkFBOEIsRUFBRSw2QkFBNkI7WUFDN0QsY0FBYyxFQUFFLE9BQU87WUFDdkIsY0FBYyxFQUFFLGdDQUFnQztTQUNuRCxDQUFDO1FBRUcsSUFBSSxDQUFDLElBQUksR0FBSSxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUU7WUFDUixHQUFHLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2xDLElBQUksRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDdkMsQ0FBQTtJQUNOLENBQUM7SUFFTSxLQUFLLENBQUMsV0FBVztRQUNwQixJQUFJLElBQUksR0FBSSxJQUFJLENBQUM7UUFDakIsSUFBSSxPQUFPLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsOEJBQThCLENBQUMsQ0FBQztRQUN0RSxJQUFJLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBLEVBQUU7WUFDaEMsSUFBSSxJQUFJLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLFVBQVUsR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUM7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQzlDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLDRCQUE0QjtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFFO1lBQ3pCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxJQUFJLElBQUksR0FBSSxFQUFFLENBQUM7WUFDZixHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBQyxDQUFDLEtBQUssRUFBQyxFQUFFO2dCQUNuQixJQUFJLElBQUksS0FBSyxDQUFBO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUMsS0FBSyxJQUFFLEVBQUU7Z0JBQ2xCLGlCQUFpQjtnQkFDakIsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUE7WUFDcEMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQU8sRUFBQyxHQUFPLEVBQUMsSUFBUTtRQUMzQyxJQUFJLElBQUksR0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBRyxNQUFNLEVBQUM7WUFDaEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNmLE9BQU07U0FDVDtRQUVELElBQUksTUFBTSxHQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFFMUIsaUNBQWlDO1FBTWhDLFVBQVU7UUFDVixJQUFJLE1BQU0sR0FBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEMsT0FBTztRQUNQLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sY0FBYztJQUNyQixDQUFDO0lBRU0sZUFBZTtJQUN0QixDQUFDO0NBQ0o7QUFHWSxRQUFBLFlBQVksR0FBRztJQUN4QixPQUFPLElBQUksVUFBVSxFQUFFLENBQUE7QUFDM0IsQ0FBQyxDQUFDIn0=