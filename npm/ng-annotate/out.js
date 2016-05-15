'use strict'

angular.module('myApp', [])
    .controller('testCtrl', ["$scope", "$dep", function ($scope, $dep) {
        $scope.name = 'hello';
    }])
    .service('namedFunction', namedFunction);

function namedFunction($dep) {
    $dep.do();
}
namedFunction.$inject = ["$dep"];