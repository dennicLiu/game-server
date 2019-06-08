/**
 * resetData
 * 每日重置数据
 * @author:Dennic
 * @date:2019/5/20
 */
var mongoose = require("mongoose");

var schemaObj = new mongoose.Schema({
    uid: {type: Number, index: true, unique: true},
    updateAt:{type:Date},                 // 更新时间
    createAt:{type:Date},                 // 创建时间
    server:{type:Number},                 // 服务器
    taskWork:{}                           // 每日任务
});

module.exports = schemaObj;