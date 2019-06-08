"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const bluebird_1 = require("bluebird");
const db_1 = require("../static/db");
// 后期改为 对应类型注册  分布式根据服务器类型命名对应client 对应类型管理
class MysqlHelper {
    constructor(cfg) {
        this.host = cfg.DBIP;
        this.port = cfg.DBPort;
        this.user = cfg.User;
        this.pwd = cfg.Pwd;
        this.dbname = cfg.DBName;
        this.client = null;
        this.init();
    }
    init() {
        let self = this;
        this.client = mysql.createConnection({
            host: self.host,
            user: self.user,
            password: self.pwd,
            database: self.dbname
        });
        bluebird_1.promisifyAll(this.client);
    }
    getClient() {
        return this.client;
    }
    async query(sql, args) {
        return await this.client.queryAsync(sql, args);
    }
    async insert(tableName, args) {
    }
}
module.exports = new MysqlHelper(db_1.dbCfg.logDb);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlzcWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9hcHAvZGFvL2xvZy9teXNxbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFnQztBQUNoQyx1Q0FBeUM7QUFDekMscUNBQW1DO0FBQ25DLDJDQUEyQztBQUUzQztJQVFJLFlBQVksR0FBTztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDakMsSUFBSSxFQUFPLElBQUksQ0FBQyxJQUFJO1lBQ3BCLElBQUksRUFBTyxJQUFJLENBQUMsSUFBSTtZQUNwQixRQUFRLEVBQUcsSUFBSSxDQUFDLEdBQUc7WUFDbkIsUUFBUSxFQUFHLElBQUksQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQztRQUNILHVCQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQU8sRUFBQyxJQUFRO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBYSxFQUFDLElBQVE7SUFFbkMsQ0FBQztDQUVKO0FBR0QsTUFBTSxDQUFDLE9BQU8sR0FBSSxJQUFLLFdBQVcsQ0FBQyxVQUFLLENBQUMsS0FBSyxDQUFDLENBQUMifQ==