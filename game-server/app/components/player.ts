import * as path from 'path';
import { Application, IComponent} from 'pinus';
import { getLogger } from 'pinus-logger';
const logger   =  getLogger("game",path.basename(__filename));



interface Interface {
}

//
export  class playerHelper implements  IComponent{
    public  name = "item";
    public  app:Application;
    public  data:any;
    public  config  = "";

    constructor(app:Application){
        this.app =  app;
        this.data =  app.get("dataApi")
    }

    costItem(){

    }



}



export default function (app: Application) {
    return new playerHelper(app);
}