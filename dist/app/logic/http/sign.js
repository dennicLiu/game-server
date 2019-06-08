"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
class sign extends baseRoute {
    constructor(time = 100) {
        super();
        this.rd_sign_Key = "nnnsjjsjnnnss";
        this.resObj = {};
    }
    sort(object) {
        // let resObj = {};
        let self = this;
        let str = "";
        Object.keys(object).sort().map((one) => {
            // self.resObj[one] = 1;
            str += one + "&";
        });
        str = str.substring(0, str.length - 1);
        return str;
    }
    createSign(str = "") {
        let sign = crypto.createSign("sha256").update(str);
        return sign;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC9sb2dpYy9odHRwL3NpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBaUM7QUFHakMsVUFBVyxTQUFRLFNBQVM7SUFJeEIsWUFBWSxPQUFjLEdBQUc7UUFDMUIsS0FBSyxFQUFFLENBQUE7UUFKRCxnQkFBVyxHQUFVLGVBQWUsQ0FBQztRQUNyQyxXQUFNLEdBQUksRUFBRSxDQUFDO0lBSXRCLENBQUM7SUFFTyxJQUFJLENBQUMsTUFBYTtRQUN0QixtQkFBbUI7UUFDbkIsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBQyxFQUFFO1lBQ2xDLHdCQUF3QjtZQUN4QixHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNILEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQztJQUdNLFVBQVUsQ0FBQyxNQUFZLEVBQUU7UUFDN0IsSUFBSyxJQUFJLEdBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEQsT0FBUSxJQUFJLENBQUE7SUFDaEIsQ0FBQztDQUNKIn0=