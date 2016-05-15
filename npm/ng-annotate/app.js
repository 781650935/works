'use strict'

angular.module('myApp', [])
    .controller('testCtrl', function ($scope, $dep) {
        $scope.name = 'hello';
    })
    .service('namedFunction', namedFunction);

function namedFunction($dep) {
    $dep.do();
}