/**
 * Created by Rayr Lee on 2015/12/4.
 */

var _ = require('underscore');

function repeated(n, fn) {
    return _.map(_.range(n), fn);
};

console.log(repeated(5, function () {
    return Math.floor(Math.random() * 10 + 1);
}));

console.log(repeated(5, function () {
    return 'hello world!';
}));