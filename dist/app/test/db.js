"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class db {
    constructor(conn) {
        this.conn = conn;
        this.init();
    }
    init() {
        let self;
        setTimeout(() => { this.test2(); }, 1000);
    }
    test2() {
        let test = this.conn.GetModel("test");
        // console.log(test,"------------------");
        // test.create({id:1})
    }
}
exports.test = function (conn) {
    // console.log(conn)
    return new db(conn);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvdGVzdC9kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBRUksWUFBWSxJQUFRO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNmLENBQUM7SUFDRCxJQUFJO1FBQ0EsSUFBSSxJQUFTLENBQUM7UUFDZCxVQUFVLENBQUMsR0FBRSxFQUFFLEdBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBLENBQUEsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxLQUFLO1FBRUQsSUFBSSxJQUFJLEdBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsMENBQTBDO1FBQzFDLHNCQUFzQjtJQUMxQixDQUFDO0NBRUo7QUFFRCxPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsSUFBUTtJQUM3QixvQkFBb0I7SUFDcEIsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUMifQ==