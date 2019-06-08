/**
 * User
 *
 * @author:Dennic
 * @date:2019/5/27
 */
var mongoose = require("mongoose");

var schemaObj = new mongoose.Schema({
    account: {type: Number, index: true, unique: true}, // 数据库表唯一键值
    uid:{type:Number},                       // 玩家分配唯一id
    server:{type:Number},                               // 玩家服务器id
    updateAt:{type:Date},                         // 更新时间
    createAt:{type:Date}                        // 创建时间
});

module.exports = schemaObj;