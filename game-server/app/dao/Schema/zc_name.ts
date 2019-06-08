/**
 * User
 *
 * @author:Dennic
 * @date:2019/5/14
 */
var mongoose = require("mongoose");

var schemaObj = new mongoose.Schema({
    sid: {type: Number}, // 数据库表唯一键值
    surname:{type:Number},                          //姓
    name:{type:Number},                             //名
    adjective:{type:Number},                        //
    createAt:{type:Date}                            //创建时间
});

schemaObj.post("save",function (doc:any,next:any) {
    doc.createAt = new Date();
    doc.save();
    next()
});





module.exports = schemaObj;