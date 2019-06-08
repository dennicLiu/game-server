import * as http from "http"
import * as fs  from "fs";
import * as path from "path";


class httpServer {
    private  port:number = 0;
    public  routes:any;
    private parse:any;
    private  httpHeader:any = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
        "X-Powered-By": "3.2.1",
        "Content-Type": "Application/json;charset=utf-8"
    };
    constructor(port:number =80){
         this.port  = port;
         this.startServer();
         this.routes = {};
         this.parse ={
             get:this.getParamsParse.bind(this),
             post:this.postParamsParse.bind(this)
         }
    }

    public async startServer(){
        let self  = this;
        let dirPath  = path.resolve(__dirname,"../../servers/http/gmHandler");
        let routes = await fs.readdirSync(dirPath);
        await Promise.all(routes.map(file=>{
           let temp  =  file.split(".");
           let appendPath  =   path.join(dirPath,file);
            if(temp[1] === "ts"){
                self.routes[temp[0]] =  require(appendPath)
            }
        }));
        // console.log(self.routes);
         http.createServer((req,res)=> {
             res.writeHead(200,self.httpHeader);
             let data  = "";
             req.on("data",(chunk)=>{
                 data += chunk
             });
             req.on("end",async()=>{
                 // res.end("你好");
                 await self.request(req,res,data)
             })
         }).listen(self.port)
    }

    private async request(req:any,res:any,data:any){
       let path  =  req.path.split("/");
       if(path[0]!=="game"){
           res.writeHead(200,this.httpHeader);
           res.end({1:1});
           return
       }

       let method  =  req.method;

       // method.toLowerCase() ==="get"?





        // todo 校验
        let params  = this.getParamsParse();
        // 拿到实例
        let handle = this.routes[path[0]];
        await handle[path[1]](req.res,params);
    }

    public getParamsParse(){
    }

    public postParamsParse(){
    }
}


export const initGmServer = function (){
    return new httpServer()
};

