//测试


export default require('angular')
    .module('lazyApp', [])
    .controller('testCtrl', function($scope){
        'ngInject';
        $scope.str = 'hello';
    });