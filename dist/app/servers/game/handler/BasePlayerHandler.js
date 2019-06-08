"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasePlayerHandler {
    constructor(app) {
        this.util = app;
        this.mongo = app.get("mongoClient");
        this.playerMgr = app.get("playerMgr");
    }
}
exports.BasePlayerHandler = BasePlayerHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBsYXllckhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHAvc2VydmVycy9nYW1lL2hhbmRsZXIvQmFzZVBsYXllckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUtJLFlBQVksR0FBZ0I7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0NBQ0o7QUFWRCw4Q0FVQyJ9