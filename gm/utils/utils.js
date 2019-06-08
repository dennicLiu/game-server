const constants = require('../common/constants');
const cryptor = require('../cryptor');
const _ = require('underscore');


let utils = module.exports = {};


utils.filterNick = (nick) => {
    let ret = '';
    _.map(nick, (c) => ret += (/[a-zA-Z0-9]/.test(c) || /[\u4e00-\u9fa5]/.test(c)) ? c : "*");
    return ret;
};


utils.invokeCallback = function(cb){
    if(!cb){
        return;
    }
    cb.apply(null, _.rest(arguments));
};


utils.isValidDate = function(value, nullable) {
    if(!value && nullable) {
        return true;
    }

    if(!utils.isValidString(value, 1)) {
        return false;
    }

    return (new Date(value)).toLocaleString() !== 'Invalid Date';
};


utils.isValidString = function(value, min, max){
    if(!_.isString(value)){
        return false;
    }

    if(min && value.length < min){
        return false;
    }

    return !(max && value.length > max);
};


utils.isBetween = function(n, i, a) {
    if (!_.isNull(i) && !_.isUndefined(i) && n < i) {
        return false;
    }
    return !(!_.isNull(a) && !_.isUndefined(a) && n > a);
};


utils.isValidNumber = function(num, min, max){
    if(_.isNaN(num)) {
        return false;
    }

    if(!_.isNumber(num)){
        return false;
    }
    return utils.isBetween(num, min, max);
};

//检测是否为数组
utils.isValidArray = function(arr, min, max){
    if(!_.isArray(arr)){
        return false;
    }
    return utils.isBetween(arr.length, min, max);
};


utils.isValidAccount = function(str){
    if(!_.isString(str)){
        return;
    }

    if(utils.getStringCharacterCount(str) < 6 || utils.getStringCharacterCount(str) > 25){
        return false;
    }

    if(utils.haveFullWidthChar(str)){
        return false;
    }

    return true;
};

//是否为密码
utils.isValidPassword = function(str){
    if(!_.isString(str)){
        return;
    }

    if(utils.getStringCharacterCount(str) < 6 || utils.getStringCharacterCount(str) > 32){
        return false;
    }

    if(utils.haveFullWidthChar(str)){
        return false;
    }

    if(utils.haveChinese(str)){
        return false;
    }

    return true;
};

//是否为呢称
utils.isValidNick = function(str){
    if(!_.isString(str)){
        return;
    }

    if(utils.getStringCharacterCount(str) > 16 || utils.getStringCharacterCount(str) < 1){
        return false;
    }

    if(utils.haveFullWidthChar(str)){
        return false;
    }

    return true;
};


utils.isValidName = function(str){
    if(!_.isString(str)){
        return;
    }

    if(utils.getStringCharacterCount(str) > 32){
        return false;
    }

    if(utils.haveFullWidthChar(str)){
        return false
    }

    return utils.isAllChinese(str);
};


utils.isValidIdCard = function(str){
    if(!_.isString(str)){
        return;
    }

    if(utils.getStringCharacterCount(str) < 15 || utils.getStringCharacterCount(str) > 18){
        return false;
    }

    if(utils.haveFullWidthChar(str) ||utils.haveChinese(str)){
        return false
    }

    return true;
};

//是否为电话号码
utils.isValidPhoneNumber = (str) => {
    if(!_.isString(str)){
        return;
    }

    if(utils.getStringCharacterCount(str) > 16){
        return false;
    }

    if(utils.haveFullWidthChar(str) || utils.haveChinese(str)){
        return false
    }

    return utils.isAllNumber(str);
};


utils.isOK = (code) => code.code === constants.ResultCode.OK().code;

//随机数组
utils.randomArray = function(arr){
    return arr[_.random(0, arr.length - 1)];
};

//随机对象
utils.randomObject = function(obj){
    return obj[utils.randomArray(_.keys(obj))];
};

//消息返回
utils.response = (res, code, msg) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    code = code || constants.ResultCode.OK();
    msg = !_.isUndefined(msg) ? msg : code.msg;
    let sign = res.payload ? cryptor.sign(JSON.stringify({code: code.code, msg})) : '';
    res.json({code: code.code, msg: msg, sign: sign});
    res.end();
};

//返回错误信息
utils.responseError = (res, msg) => {utils.response(res, constants.ResultCode.ERROR(), msg);};

//返回成功信息
utils.responseOK = (res, msg) => {utils.response(res, constants.ResultCode.OK(), msg);};

utils.responseRedirect = (res) => {utils.response(res, constants.ResultCode.REDIRECT());};

utils.responseNoPermission = (res) => {utils.response(res, constants.ResultCode.NOPERMISSION());};

utils.existInArray = function(arr, key) {
    if (!key || !arr) return false;
    for (let i in arr) {
        if (arr[i] == key) {
            return true;
        }
    }
    return false;
};

utils.url_encode = function(url){
    url = encodeURIComponent(url);
    url = url.replace(/\%3A/g, ":");
    url = url.replace(/\%2F/g, "/");
    url = url.replace(/\%3F/g, "?");
    url = url.replace(/\%3D/g, "=");
    url = url.replace(/\%26/g, "&");
    return url;
};


utils.randomNumber =function(){
    let max = 9999;
    let min = 1000;
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};


utils.for = function(){

};



utils.random =function(total){
    let max = total;
    let min = 1;
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};



utils.loadData =function(fileName){

    let  Data = require('../common/'+fileName+".json");


    return Data;
};


utils.randomSixNumber =function(){
    let max = 999999;
    let min = 100000;
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

utils.randomNum =()=>{
    let max = 9;
    let min = 1;
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};




//
// utils.random = function(arr1, arr2) {
//     let sum = 0,
//         factor = 0,
//         random = Math.random();
//
//     for(let i = arr2.length - 1; i >= 0; i--) {
//         sum += arr2[i]; // 统计概率总和
//     };
//     random *= sum; // 生成概率随机数
//     for(let i = arr2.length - 1; i >= 0; i--) {
//         factor += arr2[i];
//         if(random <= factor)
//             return arr1[i];
//     };
//     return null;
// };