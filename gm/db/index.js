const mysql = require('mysql');
const sqlUtil = require('../utils/sqlUtil');
const utils = require('../utils/utils');
const _ = require('underscore');


class DBService {
    constructor(params) {
        this.params = params;
        this.pool = mysql.createPool(this.params);
    }

    query(sql, cb) {
        this.pool.query(sql, (err, result) => {
            if(err) {
                console.error("sql: " + sql);
                console.error("error: " + err);
            }
            utils.invokeCallback(cb, err, result);
        });
    }

    call(name, params, cb) {
        let sql = 'call ' + name;
        let paramsSql = '';
        _.each(params, (param) => {
            if(!_.isEmpty(paramsSql)) {
                paramsSql += ',';
            }
            paramsSql += sqlUtil.toSqlValue(param);
        });
        sql = sql + '(' + paramsSql + ')';
        this.query(sql, cb);
    }

    delete(table, filter, cb) {
        let sql = sqlUtil.toDeleteSql(table, filter);
        this.query(sql, (err) => {utils.invokeCallback(cb, err);});
    }

    find(table, filter, cb) {
        this.list(table, filter, (err, rows) => {utils.invokeCallback(cb, err, err ? null : _.first(rows));});
    }

    insert(table, data, cb){
        let sql = sqlUtil.toInsertSql(table, data);
        this.query(sql, (err, result) => {utils.invokeCallback(cb, err, err ? null : result.insertId);});
    }

    list(table, filter, cb) {
        let sql = sqlUtil.toListSql(table, filter);
        this.query(sql, cb);
    }

    fullTable(table, cb) {
        let sql = sqlUtil.toAllSql(table);
        this.query(sql, cb);
    }

    update(table, filter, data, cb){
        let sql = sqlUtil.toUpdateSql(table, filter, data);
        this.query(sql, (err) => {utils.invokeCallback(cb, err);});
    }
}


module.exports = new DBService(require('../config/db.json'));
