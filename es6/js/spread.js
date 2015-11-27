/**
 * Created by Rayr Lee on 2015/11/11.
 */

var sum = (num1, num2) => {
    return num1 + num2;
}

let insert = (value) => ({
    into: (array) => ({
        after: (afterValue) => {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});