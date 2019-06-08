import * as redis from  "redis";
import { promisifyAll }  from "bluebird";
import {dbCfg} from "../dao/static/db";
//异步化redis 库
promisifyAll(redis);
// 后期改为 对应类型注册  分布式根据服务器类型命名对应client 对应类型管理

class RedisHelper {
    private  host:any;
    private  port:string;
    private  pwd:string;
    public  client:any;
    public  clients:any;

    constructor(cfg:any){
        this.host = cfg.host;
        this.port = cfg.port;
        this.pwd = cfg.pwd;
        this.client = null;
        this.clients = {};
        this.init()
    }

    init(){
        let self = this;
        this.client = redis.createClient(self.port,self.host);
        // self.register(this.client)
    }

    register(client:any){
        // 注册订阅事件
        client.on("ready",  ()=> {
            //订阅消息
            client.subscribe("");
            client.subscribe("");
            // console.log("订阅成功");
        });

        client.on("error",  (error:any)=> {
            console.log("Redis Error " + error);
        });

        //监听订阅成功事件
        client.on("subscribe",  (channel:any, count:any)=> {
            console.log("client subscribed to " + channel + "," + count + "total subscriptions");
        });

        //收到消息后执行回调，message是redis发布的消息
        client.on("message", (channel:any, message:string)=> {
            console.log("我接收到信息了" + message);
            //消息处理
        });

        //监听取消订阅事件
        client.on("unsubscribe", (channel:any, count:any)=> {
            console.log("client unsubscribed from" + channel + ", " + count + " total subscriptions")
        });
    }

    getClient(){
        return this.client
    }

    disconnect(type:any){
        // 断开连接
        this.client.quit()
        // if(this.client.hasOwnProperty(type)){
        //     this.client[type].quit()
        // }
    }

    async get(key:any){
       return  await this.client.getAsync(key)
    }

    async set(key:any){
        return  await this.client.setAsync(key)
    }

    async hget(key:any,uid:any){
        let obj  = await this.client.hgetAsync(key,uid);
        if(!obj) return null;
        obj = JSON.parse(obj);
        return obj
    }
    async hmset(key:any,obj:any){
        return  await this.client.hmsetAsync(key,{[obj.uid]:JSON.stringify(obj)})
    }

    async hgetall(key:any){
        return  await this.client.hgetallAsync(key)
    }

    async keys(key:any){
        // 过滤key
        return  await this.client.keysAsync(key+":*")
    }
}



/**
 * 绑定模块外部方法
 */
exports.CreateRedisClient = function ():any {
    try {
        return new RedisHelper(dbCfg.redis);
    }
    catch (e) {
        return null;
    }
};

