/**
 * Created by Rayr Lee on 2015/12/14.
 */

export default ($stateProvider, $urlRouterProvider) => {

    'ngInject';
    $urlRouterProvider.otherwise('/index');

    $stateProvider.state('index', {
        url: '/index',
        views: {
            main: {
                template: require('../pages/index/index.html'),
                controller: 'IndexController as vm',
                resolve: {
                    loadIndexCtrl: ($q, $ocLazyLoad) => {
                        return $q((resolve) => {
                            require(
                                ['../pages/index/index.controller', '../pages/index/index.directive'],
                                function (module1, module2) {
                                    $ocLazyLoad.load([module1, module2]);
                                    resolve([module1.controller, module2.directive]);
                                });
                        });
                    }
                }
            }
        }
    });

    $stateProvider.state('person', {
        url: '/person',
        views: {
            main: {
                template: require('../pages/person/person.html'),
                controller: 'PersonController as vm',
                resolve: {
                    loadIndexCtrl: ($q, $ocLazyLoad) => {
                        return $q((resolve) => {
                            require(['../pages/person/person.controller'], function (module) {
                                $ocLazyLoad.load({name: module.name});
                                resolve(module.controller);
                            });
                        });
                    }
                }
            }
        }
    });
    // 常见问题&帮助界面
};