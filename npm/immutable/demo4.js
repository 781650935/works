/**
 * Created by Rayr Lee on 15/12/19.
 */

var Immutable = require('immutable');

var arr = [1, 2],
    obj = {a: 1};

iarr = Immutable.fromJS(arr);
iobj = Immutable.fromJS(obj);

console.log(iarr);
console.log(iobj);

console.log(iarr.toJS());
console.log(iobj.toJS());