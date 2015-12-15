/**
 * Created by Rayr Lee on 2015/12/14.
 */

export default ($stateProvider, $urlRouterProvider) => {

    'ngInject';
    $urlRouterProvider.otherwise('/index');

    $stateProvider.state('index', {
        url: '/index',
        views: require('./index/index.router')
    });

    $stateProvider.state('person', {
        url: '/person',
        views: require('./person/person.router')
    });
};