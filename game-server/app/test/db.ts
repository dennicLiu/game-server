import { Application} from 'pinus';

class db {
    public conn:any;
    constructor(conn:any){
        this.conn = conn;
        this.init()
    }
    init() {
        let self:this;
        setTimeout(()=>{this.test2()},1000);
    }

    test2(){

        let test  =  this.conn.GetModel("test");
        // console.log(test,"------------------");
        // test.create({id:1})
    }

}

exports.test = function (conn:any):any {
    // console.log(conn)
    return new db(conn)
};



