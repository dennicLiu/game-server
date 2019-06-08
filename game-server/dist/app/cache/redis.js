"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis = require("redis");
const bluebird_1 = require("bluebird");
const db_1 = require("../dao/static/db");
//异步化redis 库
bluebird_1.promisifyAll(redis);
// 后期改为 对应类型注册  分布式根据服务器类型命名对应client 对应类型管理
class RedisHelper {
    constructor(cfg) {
        this.host = cfg.host;
        this.port = cfg.port;
        this.pwd = cfg.pwd;
        this.client = null;
        this.clients = {};
        this.init();
    }
    init() {
        let self = this;
        this.client = redis.createClient(self.port, self.host);
        // self.register(this.client)
    }
    register(client) {
        // 注册订阅事件
        client.on("ready", () => {
            //订阅消息
            client.subscribe("");
            client.subscribe("");
            // console.log("订阅成功");
        });
        client.on("error", (error) => {
            console.log("Redis Error " + error);
        });
        //监听订阅成功事件
        client.on("subscribe", (channel, count) => {
            console.log("client subscribed to " + channel + "," + count + "total subscriptions");
        });
        //收到消息后执行回调，message是redis发布的消息
        client.on("message", (channel, message) => {
            console.log("我接收到信息了" + message);
            //消息处理
        });
        //监听取消订阅事件
        client.on("unsubscribe", (channel, count) => {
            console.log("client unsubscribed from" + channel + ", " + count + " total subscriptions");
        });
    }
    getClient() {
        return this.client;
    }
    disconnect(type) {
        // 断开连接
        this.client.quit();
        // if(this.client.hasOwnProperty(type)){
        //     this.client[type].quit()
        // }
    }
    async get(key) {
        return await this.client.getAsync(key);
    }
    async set(key) {
        return await this.client.setAsync(key);
    }
    async hget(key, uid) {
        let obj = await this.client.hgetAsync(key, uid);
        if (!obj)
            return null;
        obj = JSON.parse(obj);
        return obj;
    }
    async hmset(key, obj) {
        return await this.client.hmsetAsync(key, { [obj.uid]: JSON.stringify(obj) });
    }
    async hgetall(key) {
        return await this.client.hgetallAsync(key);
    }
    async keys(key) {
        // 过滤key
        return await this.client.keysAsync(key + ":*");
    }
}
/**
 * 绑定模块外部方法
 */
exports.CreateRedisClient = function () {
    try {
        return new RedisHelper(db_1.dbCfg.redis);
    }
    catch (e) {
        return null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvY2FjaGUvcmVkaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBZ0M7QUFDaEMsdUNBQXlDO0FBQ3pDLHlDQUF1QztBQUN2QyxZQUFZO0FBQ1osdUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQiwyQ0FBMkM7QUFFM0M7SUFPSSxZQUFZLEdBQU87UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsNkJBQTZCO0lBQ2pDLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVTtRQUNmLFNBQVM7UUFDVCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRyxHQUFFLEVBQUU7WUFDcEIsTUFBTTtZQUNOLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQix1QkFBdUI7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRyxDQUFDLEtBQVMsRUFBQyxFQUFFO1lBQzdCLE9BQU8s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