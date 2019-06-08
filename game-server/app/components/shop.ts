import * as path from 'path';
import * as _ from  "lodash";
import { Application, IComponent,BackendSession} from 'pinus';
import { getLogger } from 'pinus-logger';
const logger   =  getLogger("game",path.basename(__filename));
interface Interface {
}
//
export  class shopHelper implements  IComponent{
    public  name = "item";
    public  app:Application;
    public  session: BackendSession;
    public  data:any;
    public  shopDoc :any;
    public  num : number = 8;

    constructor(app:Application){
        this.app =  app;
        this.data =  app.get("dataApi");
        this.init()
    }

    init(){
        // 将商店配置加载进内存 减少加载次数
        this.shopDoc  =  this.data.findAll("shop")

    }

    async createShop(userInfo:any){
        // shop
        let remain :any =  this.shopDoc.filter((product:any)=>{product.level <= userInfo.level});
        let backItems :any = [];
        let index:number;
        let temp :any = [];

        for(let i =1;i<this.num;i++){
            index = Math.floor(Math.random()* remain.length);
            if(remain[index].can_discount) {
                // 如果可以打折
                temp = remain[index].discount.split(",");
                temp = _.shuffle(temp);
                remain[index]["realDiscount"]  =  temp[0];
                backItems.push(remain[index])
            }else{
                backItems.push(remain[index])
            }
        }
        return  backItems
    }


    refreshShop(){
        // todo 扣钱
        let self  = this;
        let  userInfo  = this.session.uid;
        let items = self.createShop(userInfo);
        return items
    }


}



export default function (app: Application) {
    return new shopHelper(app);
}