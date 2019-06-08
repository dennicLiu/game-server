import * as moment from 'moment';
moment.locale('zh-cn');
import * as path from "path";
import { getLogger } from 'pinus-logger';
const logger   =  getLogger("game",path.basename(__filename));

class  dateUtil {
    public  moment:any;
    public  rank:any;
    public  activity:any;
    constructor(){
        this.moment = moment;
        this.rank =  "040000";
        this.activity =  "210000"
    }

    timestamp(time:any = new Date()){
        return new Date(time).getTime()
    }

    getDiffRefreshSecond(type:any ="rank"){
        let self:any =this;
        let day = self.moment().date();
        if(moment(`${self[type]}`, "HHmmss").valueOf()>moment().valueOf()){
            day++
        }
        day=day<10?"0"+day:day;
       return moment(`${day}+${self[type]}`, "DDHHmmss").diff(moment(),"seconds")
    }

    diffTime(year:number,month:number,days:number){
        let self:any = this;
        let t1 = self.moment().year();
        var t2 = self.moment().month()+1;
        var t3 = self.moment().date();
        return `${t1+year}-${t2+month}-${t3+days}`
    }

    diffTimeStamp(year:number,month:number,days:number){
        let self : any =this;
       return  self.timestamp(self.diffTime(year,month,days))
    }

    diffTimeStampBySecond(year:number,month:number,days:number){
        let self : any =this;
        return  Number((self.diffTimeStamp(year,month,days)/1000).toFixed(0))
    }

}

module.exports = new dateUtil();