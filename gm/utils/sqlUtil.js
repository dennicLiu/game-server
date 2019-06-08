const _ = require('underscore');


let util = module.exports = {};


util.toSqlKey = function(key){
    return '`' + key + '`';
};


util.toSqlValue = function(value){
    if(_.isString(value)){
        return "'" + value + "'";
    }

    if(_.isNull(value)){
        return 'null';
    }

    return value;
};


util.toValueClause = function(data){
    let ret = '';
    _.each(data, function(value, key){
        if(!_.isEmpty(ret)){
            ret += ',';
        }
        ret += util.toSqlKey(key) + '=' + util.toSqlValue(value);
    });
    return ret;
};


util.toWhereClause = function(data){
    let ret = _.isEmpty(data) ? "1 = 1" : '';
    _.each(data, function(value, key){
        if(!_.isEmpty(ret)){
            ret += ' AND ';
        }
        ret += util.toSqlKey(key) + '=' + util.toSqlValue(value);
    });
    return ret;
};

//删除数据
util.toDeleteSql = function(table, data){
    return 'DELETE FROM ' + util.toSqlKey(table) + ' WHERE ' + util.toWhereClause(data);
};

//写入数据
util.toInsertSql = function(table, data){
    return 'INSERT INTO ' + util.toSqlKey(table) + ' SET ' + util.toValueClause(data);
};

//列表展示数据
util.toListSql = function(table, filter){
    return "SELECT * FROM " + util.toSqlKey(table) + ' WHERE ' + util.toWhereClause(filter);
};

util.toAllSql = function(table){
    return "SELECT * FROM " + util.toSqlKey(table) ;
};

//修改数据
util.toUpdateSql = function(table, filter, data){
    return 'UPDATE ' + util.toSqlKey(table) + ' SET ' + util.toValueClause(data) + ' WHERE ' + util.toWhereClause(filter);
};