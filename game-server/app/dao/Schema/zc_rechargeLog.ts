/**
 * rechargeLog
 *
 * @author:Dennic
 * @date:2019/5/20
 */
var mongoose = require("mongoose");

var schemaObj = new mongoose.Schema({
    id: {type: Number, index: true, unique: true}, // 数据库表唯一键值
    product_id:[Number],                  // 购买物品id
    channel:{type:String},                // 渠道
    order_id:{type:String},               // 订单id
    extro:{},                             // 备注信息
    server:{type:Number,index: true},     // 所属服务器
    createAt:{type:Date},                 // 创建时间
    updateAt:{type:Date}                  // 更新时间
});

module.exports = schemaObj;