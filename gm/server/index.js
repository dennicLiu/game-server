const http = require('http');
const _ = require('lodash');
const path  = require("path");


class Server {
    constructor() {this.host = require(path.resolve(__dirname,'../config/http.json'))["serve-1"]}

    changeItem(userId, itemId, count, cb) {this.get('user/item/change', {userId, itemId, count}, cb);}

    get(route, params, cb) {
        let query = '';
        _.each(params, (v, k) => {query += (query === '' ? '' : '&') + k + '=' + v;});
        http.get(this.host + route + (query === '' ? '' : '?') + encodeURI(query), (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => cb && cb(JSON.parse(body)));
        });
    }
}


module.exports = new Server();