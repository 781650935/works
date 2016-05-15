/**
 * Created by Rayr Lee on 2015/11/5.
 */

var request = require('request'),
    fs = require('fs');

request('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png').pipe(fs.createWriteStream('test.png'));