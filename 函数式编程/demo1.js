/**
 * Created by Rayr Lee on 15/12/2.
 */

function splat(fun) {
    return function (array) {
        return fun.apply(null, array);
    }
}

var sumArray = splat(function (x, y) {
    return x + y;
});

console.log(sumArray([3, 4]));