/**
 * Created by Rayr Lee on 2015/11/27.
 */

var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

var gen = function* () {
    var r1 = yield readFile('./file/txt1.txt');
    console.log(r1.toString());
    var r2 = yield readFile('./file/txt2');
    console.log(r2.toString());
};

var g = gen();

var r1 = g.next();

r1.value(function(err, data){
    if (err) throw err;
});