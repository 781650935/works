/**
 * Created by Rayr Lee on 2015/12/4.
 */

var _ = require('underscore');

function find_best(valueFn, bestFn, arr) {
    return _.reduce(arr, function (best, current) {

        var _bestValue = valueFn(best),
            _currentValue = valueFn(current);

        //return (_bestValue === bestFn(_bestValue, _currentValue)) ? best : current;
        return bestFn(best, current);
    });
};

console.log(find_best(_.identity, Math.max, [1, 2, 7, 4, 5]));