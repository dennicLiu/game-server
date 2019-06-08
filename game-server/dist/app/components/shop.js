"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const _ = require("lodash");
const pinus_logger_1 = require("pinus-logger");
const logger = pinus_logger_1.getLogger("game", path.basename(__filename));
//
class shopHelper {
    constructor(app) {
        this.name = "item";
        this.num = 8;
        this.app = app;
        this.data = app.get("dataApi");
        this.init();
    }
    init() {
        // 将商店配置加载进内存 减少加载次数
        this.shopDoc = this.data.findAll("shop");
    }
    async createShop(userInfo) {
        // shop
        let remain = this.shopDoc.filter((product) => { product.level <= userInfo.level; });
        let backItems = [];
        let index;
        let temp = [];
        for (let i = 1; i < this.num; i++) {
            index = Math.floor(Math.random() * remain.length);
            if (remain[index].can_discount) {
                // 如果可以打折
                temp = remain[index].discount.split(",");
                temp = _.shuffle(temp);
                remain[index]["realDiscount"] = temp[0];
                backItems.push(remain[index]);
            }
            else {
                backItems.push(remain[index]);
            }
        }
        return backItems;
    }
    refreshShop() {
        // todo 扣钱
        let self = this;
        let userInfo = this.session.uid;
        let items = self.createShop(userInfo);
        return items;
    }
}
exports.shopHelper = shopHelper;
function default_1(app) {
    return new shopHelper(app);
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3Nob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFDN0IsNEJBQTZCO0FBRTdCLCtDQUF5QztBQUN6QyxNQUFNLE1BQU0sR0FBTSx3QkFBUyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFHOUQsRUFBRTtBQUNGO0lBUUksWUFBWSxHQUFlO1FBUG5CLFNBQUksR0FBRyxNQUFNLENBQUM7UUFLZCxRQUFHLEdBQVksQ0FBQyxDQUFDO1FBR3JCLElBQUksQ0FBQyxHQUFHLEdBQUksR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsSUFBSTtRQUNBLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRTlDLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVk7UUFDekIsT0FBTztRQUNQLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBVyxFQUFDLEVBQUUsR0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLFNBQVMsR0FBUSxFQUFFLENBQUM7UUFDeEIsSUFBSSxLQUFZLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO1FBRW5CLEtBQUksSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsSUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFO2dCQUMzQixTQUFTO2dCQUNULElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekMsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7YUFDaEM7aUJBQUk7Z0JBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTthQUNoQztTQUNKO1FBQ0QsT0FBUSxTQUFTLENBQUE7SUFDckIsQ0FBQztJQUdELFdBQVc7UUFDUCxVQUFVO1FBQ1YsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDO1FBQ2pCLElBQUssUUFBUSxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztDQUdKO0FBcERELGdDQW9EQztBQUlELG1CQUF5QixHQUFnQjtJQUNyQyxPQUFPLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFGRCw0QkFFQyJ9