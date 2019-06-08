import {Application, BackendSession, FrontendSession, RemoterClass} from 'pinus';

export default function (app: Application) {
    return new NameRemote(app);
}

// UserRpc的命名空间自动合并
declare global {
    interface UserRpc {
        name: {
            // 一次性定义一个类自动合并到UserRpc中
            nameRemote: RemoterClass<BackendSession, NameRemote>;
        };
    }
}


export class NameRemote {
    public data:any;
    public mongo:any;
    public step:any;
    constructor(private app: Application) {
        this.data = app.get("dataApi");
        this.mongo = app.get("nameDB");
        this.step = 50;
    }

    /**
     *
     * @param username
     * @param password
     */
    public async register(sid:any) {
        let self:any = this;
        let nameArr = await self.random();
        let exist = await  this.mongo.GetModel("name").findOne({ sid:sid,surname:nameArr[0], name:nameArr[1], adjective:nameArr[2]});
        if(exist){
            self.register(sid)
        }
        await  this.mongo.GetModel("name").create({ sid:sid ,surname:nameArr[0], name:nameArr[1], adjective:nameArr[2]});
        let name  = await  self.getName(nameArr);
        return name
    }

    public async getName(nameArr:any){
        let self:any =this;
        let surname =  await self.data.findById(nameArr[0],"random_name");
        let na = await self.data.findById(nameArr[1],"random_name");
        let adjective = await self.data.findById(nameArr[2],"random_name");
        let name:string = surname.surname  + na.name+ adjective.adjective;
        return name
    }

    private async random(){
        let self : any = this;
        let id1 = Math.floor(Math.random()* self.step);
        let id2 = Math.floor(Math.random()* self.step);
        let id3 = Math.floor(Math.random()* self.step);
        return [id1,id2,id3]
    }
}








