"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const pinus_logger_1 = require("pinus-logger");
const logger = pinus_logger_1.getLogger("game", path.basename(__filename));
//
class itemHelper {
    constructor(app) {
        this.name = "item";
        this.config = "";
        this.app = app;
        this.data = app.get("dataApi");
    }
}
exports.itemHelper = itemHelper;
function default_1(app) {
    return new itemHelper(app);
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFFN0IsK0NBQXlDO0FBQ3pDLE1BQU0sTUFBTSxHQUFNLHdCQUFTLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQU85RCxFQUFFO0FBQ0Y7SUFNSSxZQUFZLEdBQWU7UUFMbkIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUdkLFdBQU0sR0FBSSxFQUFFLENBQUM7UUFHakIsSUFBSSxDQUFDLEdBQUcsR0FBSSxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ25DLENBQUM7Q0FFSjtBQVhELGdDQVdDO0FBSUQsbUJBQXlCLEdBQWdCO0lBQ3JDLE9BQU8sSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUZELDRCQUVDIn0=