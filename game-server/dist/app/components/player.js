"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const pinus_logger_1 = require("pinus-logger");
const logger = pinus_logger_1.getLogger("game", path.basename(__filename));
//
class playerHelper {
    constructor(app) {
        this.name = "item";
        this.config = "";
        this.app = app;
        this.data = app.get("dataApi");
    }
    costItem() {
    }
}
exports.playerHelper = playerHelper;
function default_1(app) {
    return new playerHelper(app);
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZCO0FBRTdCLCtDQUF5QztBQUN6QyxNQUFNLE1BQU0sR0FBTSx3QkFBUyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFPOUQsRUFBRTtBQUNGO0lBTUksWUFBWSxHQUFlO1FBTG5CLFNBQUksR0FBRyxNQUFNLENBQUM7UUFHZCxXQUFNLEdBQUksRUFBRSxDQUFDO1FBR2pCLElBQUksQ0FBQyxHQUFHLEdBQUksR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsUUFBUTtJQUVSLENBQUM7Q0FJSjtBQWpCRCxvQ0FpQkM7QUFJRCxtQkFBeUIsR0FBZ0I7SUFDckMsT0FBTyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRkQsNEJBRUMifQ==