/**
 * Created by Rayr Lee on 2015/11/27.
 */

var thunkify = require('thunkify');

function f(a, b, callback) {
    var sum = a + b;
    callback(sum);
    callback(sum);
}

var ft = thunkify(f);
ft(1, 2)(console.log);