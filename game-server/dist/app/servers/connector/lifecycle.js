"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    return new Lifecycle();
}
exports.default = default_1;
class Lifecycle {
    beforeStartup(app, cb) {
        console.log(app.getServerId(), '!!!before startup');
        cb();
    }
    afterStartup(app, cb) {
        console.log(app.getServerId(), '!!afterStartup');
        cb();
    }
    afterStartAll(app) {
        console.log(app.getServerId(), '!!after start all');
    }
    beforeShutdown(app, shutDown, cancelShutDownTimer) {
        console.log(app.getServerId(), '!!beforeShutdown');
        shutDown();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3NlcnZlcnMvY29ubmVjdG9yL2xpZmVjeWNsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFGRCw0QkFFQztBQUdEO0lBQ0ksYUFBYSxDQUFDLEdBQWdCLEVBQUUsRUFBYztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BELEVBQUUsRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFnQixFQUFFLEVBQWM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNqRCxFQUFFLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxhQUFhLENBQUMsR0FBZ0I7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsY0FBYyxDQUFDLEdBQWdCLEVBQUUsUUFBb0IsRUFBRSxtQkFBK0I7UUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxRQUFRLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FDSiJ9