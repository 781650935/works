'use strict';

function homeRouting($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./views/home.html'), // include small templates into routing configuration
            controller: 'HomeController as vm',
            resolve: {
                loadHomeController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module =  require('./controllers/home.controller').name;
                            $ocLazyLoad.load({name: 'home.controller'});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('home.about', {
            url: '/about',
            template: require('./views/home.about.html'),
            controller: 'HomeAboutController as vm',
            resolve: {
                loadHomeController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module =  require('./controllers/home.about.controller').name;
                            $ocLazyLoad.load({name: 'home.about.controller'});
                            resolve(module.controller);
                        });
                    });
                }
            }
        });
}

export default angular.module('home.routing', []).config(homeRouting);
