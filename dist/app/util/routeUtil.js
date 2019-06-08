"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dispatcher_1 = require("./dispatcher");
function game(session, msg, app, cb) {
    let gameServers = app.getServersByType('game');
    if (!gameServers || gameServers.length === 0) {
        cb(new Error('can not find game servers.'));
        return;
    }
    let res = dispatcher_1.dispatch(session.uid + "", gameServers);
    cb(null, res.id);
}
exports.game = game;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL3V0aWwvcm91dGVVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkNBQXVDO0FBSXZDLGNBQXFCLE9BQWdCLEVBQUUsR0FBUSxFQUFFLEdBQWdCLEVBQUUsRUFBNkM7SUFDNUcsSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRS9DLElBQUcsQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDekMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPO0tBQ1Y7SUFFRCxJQUFJLEdBQUcsR0FBRyxxQkFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFWRCxvQkFVQyJ9