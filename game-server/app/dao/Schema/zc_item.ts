

/**
 * Item
 *
 * @author:Dennic
 * @date:2019/5/20
 */
var mongoose = require("mongoose");

var schemaObj = new mongoose.Schema({
    uid: {type: Number, index: true, unique: true}, // 数据库表唯一键值
    name:{type: String},                           // 物品名称
    server_id:{type:String},                       // 物品唯一id
    type:{type:Number},                            // 参考策划物品类型定义
    server:{type:Number,index:true}                // 所属服务器
});

module.exports = schemaObj;