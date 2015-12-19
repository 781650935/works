/**
 * Created by Rayr Lee on 15/12/19.
 */

var Immutable = require('immutable');

var _t = Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40}, function (key, value) {
    var isIndexed = Immutable.Iterable.isIndexed(value);
    console.log(isIndexed, value)
    return isIndexed ? value.toList() : value.toOrderedMap();
});

console.log(_t)