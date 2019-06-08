import * as mysql from  "mysql";
import { promisifyAll }  from "bluebird";
import {dbCfg} from "../static/db";
// 后期改为 对应类型注册  分布式根据服务器类型命名对应client 对应类型管理

class   MysqlHelper {
    private  host:any;
    private  port:string;
    private  pwd:string;
    public  client:any;
    public  user:any;
    public  dbname:any;

    constructor(cfg:any){
        this.host = cfg.DBIP;
        this.port = cfg.DBPort;
        this.user = cfg.User;
        this.pwd = cfg.Pwd;
        this.dbname = cfg.DBName;
        this.client = null;
        this.init()
    }

    init(){
        let self = this;
        this.client = mysql.createConnection({
            host     : self.host,
            user     : self.user,
            password : self.pwd,
            database : self.dbname
        });
        promisifyAll(this.client);
    }

    getClient(){
        return this.client
    }

    async query(sql:any,args:any){
        return await this.client.queryAsync(sql,args);
    }

    async insert(tableName:any,args:any){

    }

}


module.exports =  new  MysqlHelper(dbCfg.logDb);