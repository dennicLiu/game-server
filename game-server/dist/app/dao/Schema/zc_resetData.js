/**
 * resetData
 * 每日重置数据
 * @author:Dennic
 * @date:2019/5/20
 */
var mongoose = require("mongoose");
var schemaObj = new mongoose.Schema({
    uid: { type: Number, index: true, unique: true },
    updateAt: { type: Date },
    createAt: { type: Date },
    server: { type: Number },
    taskWork: {} // 每日任务
});
module.exports = schemaObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemNfcmVzZXREYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL2Rhby9TY2hlbWEvemNfcmVzZXREYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5DLElBQUksU0FBUyxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxHQUFHLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5QyxRQUFRLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDO0lBQ3BCLFFBQVEsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUM7SUFDcEIsTUFBTSxFQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQztJQUNwQixRQUFRLEVBQUMsRUFBRSxDQUEyQixPQUFPO0NBQ2hELENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIn0=