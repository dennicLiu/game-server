/**
 * Hero
 *
 * @author:Dennic
 * @date:2019/5/20
 */



var mongoose = require("mongoose");

var schemaObj = new mongoose.Schema({
    id: {type: Number},                            // 英雄id
    name:{type: String},                           // 英雄名字
    server_id:{type:String},                       // 物品唯一id
    uid:{type:Number},                             // 所属玩家id
    quality:{type:Number},                         // 英雄品质
    level:{type:Number},                           // 英雄等级
    server:{type:Number},                          // 所属服务器
    createAt:{type:Date},                          // 创建时间
    updateAt:{type:Date},                           // 更新时间
    activie_skill_lv:{type:Number},
    passive_skill1_lv:{type:Number},
    passive_skill2_lv:{type:Number},
    passive_skill3_lv:{type:Number},
    ctime:{type:Number}
});

schemaObj.post("save",function (doc:any,next:any) {
    doc.createAt = new Date();
    doc.updateAt = new Date();
    if(!doc.server_id||doc.server_id ==""){
        doc.server_id  = doc._id;
    }
    doc.save();
    next()
});

module.exports = schemaObj;