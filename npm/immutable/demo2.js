/**
 * Created by Rayr Lee on 15/12/19.
 */

var Immutable = require('immutable');

var _t1 = Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40});

var _t2 = Immutable.Map({a: {b: [10, 20, 30]}, c: 40});

var _t3 = Immutable.List([0, 1, 2, 3, 4]);

var _t4 = Immutable.Map({a: 1});

console.log(_t2);
console.log(_t1.get('c'));
console.log(Immutable.Iterable.isIndexed(_t3));
console.log(Immutable.Iterable.isIndexed(_t4));

//Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40}, function (key, value) {
//
//    var isIndexed = Immutable.Iterable.isIndexed(value);
//    console.log(isIndexed, value);
//    return isIndexed ? value.toList() : value.toOrderedMap();
//
//});