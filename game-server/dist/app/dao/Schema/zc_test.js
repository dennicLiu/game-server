/**
 * Test
 *
 * @author:Dennic
 * @date:2019/5/26
 */
var mongoose = require("mongoose");
var schemaObj = new mongoose.Schema({
    id: { type: Number },
    createAt: { type: Date },
    updateAt: { type: Date } // 更新时间
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemNfdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9kYW8vU2NoZW1hL3pjX3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2hDLEVBQUUsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDbEIsUUFBUSxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQztJQUNwQixRQUFRLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQWtCLE9BQU87Q0FDaEQsQ0FBQyxDQUFDO0FBRUgsMkNBQTJDO0FBQzNDLG1FQUFtRTtBQUNuRSx1REFBdUQ7QUFDdkQsZ0JBQWdCO0FBQ2hCLDZCQUE2QjtBQUM3QixnQ0FBZ0M7QUFDaEMseUNBQXlDO0FBQ3pDLFdBQVc7QUFDWCxjQUFjO0FBQ2QsTUFBTTtBQUNOLEVBQUU7QUFDRix1REFBdUQ7QUFDdkQsOEJBQThCO0FBQzlCLHFGQUFxRjtBQUNyRix1Q0FBdUM7QUFDdkMsY0FBYztBQUNkLE1BQU07QUFFTixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyJ9