
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';
import commonService from './commons/service';

var app = angular.module('myApp', [uiRouter, 'oc.lazyLoad', commonService.name]);

app.controller('test', ['$scope', '$_test', ($scope, $_test) => {

    $scope.str = $_test.add('lilei');

}]);

//angular.bootstrap(document, app.name, {strictDi: true});
