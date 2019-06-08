/**
 * Test
 *
 * @author:Dennic
 * @date:2019/5/26
 */
var mongoose = require("mongoose");

var schemaObj = new mongoose.Schema({
    id: {type: Number}, //  测试id
    createAt:{type:Date},                 // 创建时间
    updateAt:{type:Date}                  // 更新时间
});

// schemaObj.pre('save',function(next:any){
//     // if(self.isNew){//Document.prototype.isNew  mongoose 自己会识别
//     //     self.createdAt = self.updateAt=Date.now()
//     // }else{
//     console.log('notnew');
//     // console.log(schemaObj)
//     //     self.updateAt = Date.now();
//     // }
//     next();
// });
//
// schemaObj.pre('findOneAndUpdate',function(next:any){
//     // let self:any = this;
//     // self.updateAt = Date.now();  // Cannot set property 'updateAt' of undefined
//     console.log('findOneAndUpdate');
//     next();
// });

module.exports = schemaObj;