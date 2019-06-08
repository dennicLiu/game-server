let util = module.exports = {};

//昨天
util.lastDay = (now) => {
    now = now || new Date();
    return new Date(now.getTime() - 24 * 60 * 60 * 1000);
};
//当日开始时间
util.todayBegin = (begin) => {
    begin =  new Date(begin);
    begin.setHours(0, 0, 0, 0);
    return begin;
};
//当日结束时间
util.todayEnd = (end) => {
    end =  new Date(end);
    end.setHours(23, 59, 59, 59);
    return end;
};
//秒数转换成 xx时xx分xx秒
util.formatSeconds=(value) => {
    let theTime = parseInt(value);// 秒
    let theTime1 = 0;// 分
    let theTime2 = 0;// 小时
    if(theTime > 60) {
        theTime1 = parseInt(theTime/60);
        theTime = parseInt(theTime%60);
        if(theTime1 > 60) {
            theTime2 = parseInt(theTime1/60);
            theTime1 = parseInt(theTime1%60);
        }
    }
    let result = ""+parseInt(theTime)+"秒";
    if(theTime1 > 0) {
        result = ""+parseInt(theTime1)+"分"+result;
    }
    if(theTime2 > 0) {
        result = ""+parseInt(theTime2)+"小时"+result;
    }
    return result;
};

//返回'2017-08-12 00:00:00'
util.format = (value) => {
    let date = new Date(value);
    let month = date.getMonth()+1;
    month = month < 10? '0'+month:month;
    let formDate = date.getDate();
    formDate = formDate < 10? '0'+formDate:formDate;
    let hour = date.getHours();
    hour = hour <10? '0'+hour:hour;
    let minutes = date.getMinutes();
    minutes = minutes <10? '0'+minutes:minutes;
    let seconds = date.getSeconds();
    seconds = seconds <10? '0'+seconds:seconds;

   let date_value = date.getFullYear() + '-' + month + '-' + formDate + ' ' + hour + ':' + minutes + ':' + seconds;
   return date_value;
};

//返回08:00
util.toStartHours = (value) =>{
    let hour  = value.getHours();
    hour=hour<10?'0'+hour:hour;
    hour += ":00";
    return hour
};

//返回09:59
util.toEndHours = (value) =>{
    let hour  = value.getHours();
    hour=hour<10?'0'+hour:hour;
    hour += ":59";
    return hour
};
//返回 2017-08-12  供搜索条件处理用
util.formatShot = (value) => {
    let date = new Date(value);
    let month = date.getMonth()+1;
    month = month < 10? '0'+month:month;
    let formDate = date.getDate();
    formDate = formDate < 10? '0'+formDate:formDate;

    let dateValue = date.getFullYear() + '-' + month + '-' + formDate ;
    return dateValue;
};



util.formatPlus = (value) => {
    let date = new Date(value);
    let month = date.getMonth()+1;
    month = month < 10? '0'+month:month;
    let formDate = date.getDate();
    formDate = formDate < 10? '0'+formDate:formDate;
    let hour = date.getHours();
    hour = hour <10? '0'+hour:hour;
    let minutes = date.getMinutes();
    minutes = minutes <10? '0'+minutes:minutes;
    let seconds = date.getSeconds();
    seconds = seconds <10? '0'+seconds:seconds;

    let date_value = date.getFullYear() + '/' + month + '/' + formDate + ' ' + hour + ':' + minutes + ':' + seconds;
    return date_value;
};