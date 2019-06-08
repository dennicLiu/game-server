class  resUtil {
    public  successCode:any;
    public  failCode:any;
    constructor(){
        this.successCode = 200;
        this.failCode =  500;
    }

    success(desc:string,key:string){
        return{
            code: this.successCode,
            desc:desc,
            key:key
        };

    }

    fail(desc:string,key:string){
        return{
            code: this.failCode,
            desc:desc,
            key:key
        };
    }
}


export const initUtil =   new resUtil();

