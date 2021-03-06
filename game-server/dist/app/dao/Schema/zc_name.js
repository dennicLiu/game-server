/**
 * User
 *
 * @author:Dennic
 * @date:2019/5/14
 */
var mongoose = require("mongoose");
var schemaObj = new mongoose.Schema({
    sid: { type: Number },
    surname: { type: Number },
    name: { type: Number },
    adjective: { type: Number },
    createAt: { type: Date } //创建时间
});
schemaObj.post("save", function (doc, next) {
    doc.createAt = new Date();
    doc.save();
    next();
});
module.exports = schemaObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemNfbmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9kYW8vU2NoZW1hL3pjX25hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2hDLEdBQUcsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDbkIsT0FBTyxFQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQztJQUNyQixJQUFJLEVBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDO0lBQ2xCLFNBQVMsRUFBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUM7SUFDdkIsUUFBUSxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUE0QixNQUFNO0NBQ3pELENBQUMsQ0FBQztBQUVILFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLFVBQVUsR0FBTyxFQUFDLElBQVE7SUFDNUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNYLElBQUksRUFBRSxDQUFBO0FBQ1YsQ0FBQyxDQUFDLENBQUM7QUFNSCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyJ9