/**
 * Created by Rayr Lee on 15/12/19.
 */

var Immutable = require('immutable');

var stateV1 = Immutable.fromJS({
    users: [
        {name: 'Foo'},
        {name: 'Bar'}
    ]
});

var stateV2 = stateV1.updateIn(['users', 0], function () {
    return Immutable.fromJS({
        name: 'Barbar'
    });
});

console.log(stateV2);
console.log(stateV1 === stateV2); // false
console.log(stateV1.getIn(['users', 0]) === stateV2.getIn(['users', 0])); // true
console.log(stateV1.getIn(['users', 1]) === stateV2.getIn(['users', 1])); // false