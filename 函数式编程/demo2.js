/**
 * Created by Rayr Lee on 2015/12/4.
 */

var _ = require('underscore');

function test() {

    var a = 0;

    return function () {
        a = a + 1
        return a;
    }
}

var now1 = test();
var now2 = test();

setInterval(function () {
    console.log('now1=', now1());
}, 1000);

setInterval(function () {
    console.log('now2=', now2());
}, 3000);