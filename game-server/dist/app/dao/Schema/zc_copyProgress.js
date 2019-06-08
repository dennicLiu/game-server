/**
 * CopyProgress
 *
 * @author:Dennic
 * @date:2019/5/20
 */
var mongoose = require("mongoose");
var schemaObj = new mongoose.Schema({
    uid: { type: Number, index: true, unique: true },
    progress: [Number],
    server: { type: Number, index: true },
    createAt: { type: Date },
    updateAt: { type: Date } // 更新时间
});
schemaObj.pre('save', function (next) {
    // let self:any = this
    // if(self.isNew){//Document.prototype.isNew  mongoose 自己会识别
    //     self.createdAt = self.updateAt=Date.now()
    // }else{
    console.log('notnew');
    console.log(schemaObj);
    //     self.updateAt = Date.now();
    // }
    next();
});
schemaObj.pre('findOneAndUpdate', function (next) {
    // let self:any = this;
    // self.updateAt = Date.now();  // Cannot set property 'updateAt' of undefined
    console.log('findOneAndUpdate');
    next();
});
module.exports = schemaObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemNfY29weVByb2dyZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL2Rhby9TY2hlbWEvemNfY29weVByb2dyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5DLElBQUksU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxHQUFHLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5QyxRQUFRLEVBQUMsQ0FBQyxNQUFNLENBQUM7SUFDakIsTUFBTSxFQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQ2hDLFFBQVEsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUM7SUFDcEIsUUFBUSxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFrQixPQUFPO0NBQ2hELENBQUMsQ0FBQztBQUdILFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLFVBQVMsSUFBUTtJQUNsQyxzQkFBc0I7SUFDdEIsNERBQTREO0lBQzVELGdEQUFnRDtJQUNoRCxTQUFTO0lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzNCLGtDQUFrQztJQUNsQyxJQUFJO0lBQ0osSUFBSSxFQUFFLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUMsVUFBUyxJQUFRO0lBQzlDLHVCQUF1QjtJQUN2Qiw4RUFBOEU7SUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hDLElBQUksRUFBRSxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyJ9