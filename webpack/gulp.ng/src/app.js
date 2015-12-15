import $ from 'jquery';
import _ from 'underscore';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';
import commonRouter from './pages/router';
import commonService from './common/common.service';
import commonController from './common/common.controller';

var app = angular.module('myApp',
    [
        uiRouter,
        'oc.lazyLoad',
        commonService.name,
        commonController.name
    ]
);

app.run(function ($rootScope, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeStart', function () {

    });

});

//路由器
app.config(commonRouter);

angular.bootstrap(document, [app.name], {strictDi: true});