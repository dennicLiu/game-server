import * as crypto from  "crypto"


class sign extends baseRoute{
    private  rd_sign_Key:string = "nnnsjjsjnnnss";
    private  resObj =  {};

    constructor(time:number = 100){
       super()
    }

    public  sort(object:object):string{
        // let resObj = {};
        let self  = this;
        let str :string = "";
        Object.keys(object).sort().map((one)=>{
            // self.resObj[one] = 1;
            str += one + "&"
        });
        str = str.substring(0,str.length-1);
        return str
    }


    public createSign(str:string =""){
       let  sign  = crypto.createSign("sha256").update(str);
        return  sign
    }
}