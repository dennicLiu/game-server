/**
 * User
 *
 * @author:Dennic
 * @date:2019/5/14
 */
var mongoose = require("mongoose");

var schemaObj = new mongoose.Schema({
    uid: {type: Number, index: true, unique: true}, // 数据库表唯一键值
    name:{type: String},                            // 昵称
    avatar:{type:String},                           // 头像
    level:{type:Number},                            // 等级
    serverId:{type:Number, index: true},            // 所属服务器
    serverName :{type:String},                      // 服务器名字
    exp:{type:Number},                              // 经验
    sdkInfo:{},                                     // sdk 渠道信息
    gold:{type:Number},                             // 金币
    gem:{type:Number},                              // 钻石数量
    createAt:{type:Date},                           // 创角时间
    updateAt:{type:Date},                           // 上次更新时间
    totalRecharge:{type:Number},                    // 总付费
    lastRechargeTime:{type:Date},                   // 上次付费时间
    lastLoginTime:{type:Date},                      // 上次登录时间
    lastLogoutTime:{type:Date},                     // 上次登出时间
    activetyList:{},                                // 活动参与记录
    item:[{type:String,ref: 'item'}],               // 物品关联表
    hero:[{type:String,ref: 'hero'}]                // 英雄关联表
});

schemaObj.post("save",function (doc:any,next:any) {
    doc.createAt = new Date();
    doc.updateAt = new Date();
    doc.lastLoginTime = new Date();
    doc.activetyList ={};
    doc.save();
    next()
});





module.exports = schemaObj;