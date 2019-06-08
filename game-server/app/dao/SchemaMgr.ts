import * as fs from "fs";
import * as path from "path";

class SchemaMgr {
    public  schema :any;
    constructor(){
        this.schema = {};
        this.load();
    }

    async load(){
        let self  =  this;
        let filepath  =  path.resolve(__dirname,"./Schema");
        let schemas = await fs.readdirSync(filepath);
        schemas.map((one)=>{
            let appendPath  = path.join(filepath,one);
            let filename = one.split(".")[0];
            self.schema[filename] = require(appendPath)
        });
    }

    getSchemas(){
        return this.schema
    }

    getSchemaByName(tablename:string){
        let self  = this;
        if(self.schema.hasOwnProperty(tablename)){
            return self.schema[tablename]
        }
        self.load();
        return self.schema[tablename]
    }
}

export const  schema = async function () {
    return  await  new  SchemaMgr();
}