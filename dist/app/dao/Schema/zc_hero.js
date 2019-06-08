/**
 * Hero
 *
 * @author:Dennic
 * @date:2019/5/20
 */
var mongoose = require("mongoose");
var schemaObj = new mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    server_id: { type: String },
    uid: { type: Number },
    quality: { type: Number },
    level: { type: Number },
    server: { type: Number },
    createAt: { type: Date },
    updateAt: { type: Date },
    activie_skill_lv: { type: Number },
    passive_skill1_lv: { type: Number },
    passive_skill2_lv: { type: Number },
    passive_skill3_lv: { type: Number },
    ctime: { type: Number }
});
schemaObj.post("save", function (doc, next) {
    doc.createAt = new Date();
    doc.updateAt = new Date();
    if (!doc.server_id || doc.server_id == "") {
        doc.server_id = doc._id;
    }
    doc.save();
    next();
});
module.exports = schemaObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemNfaGVyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9kYW8vU2NoZW1hL3pjX2hlcm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFJSCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2hDLEVBQUUsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDbEIsSUFBSSxFQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUNuQixTQUFTLEVBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDO0lBQ3ZCLEdBQUcsRUFBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUM7SUFDakIsT0FBTyxFQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQztJQUNyQixLQUFLLEVBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDO0lBQ25CLE1BQU0sRUFBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUM7SUFDcEIsUUFBUSxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQztJQUNwQixRQUFRLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDO0lBQ3BCLGdCQUFnQixFQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQztJQUM5QixpQkFBaUIsRUFBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUM7SUFDL0IsaUJBQWlCLEVBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDO0lBQy9CLGlCQUFpQixFQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQztJQUMvQixLQUFLLEVBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDO0NBQ3RCLENBQUMsQ0FBQztBQUVILFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLFVBQVUsR0FBTyxFQUFDLElBQVE7SUFDNUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUMxQixJQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBRSxHQUFHLENBQUMsU0FBUyxJQUFHLEVBQUUsRUFBQztRQUNsQyxHQUFHLENBQUMsU0FBUyxHQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7S0FDNUI7SUFDRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWCxJQUFJLEVBQUUsQ0FBQTtBQUNWLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMifQ==