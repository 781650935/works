/**
 * Created by Rayr Lee on 15/12/10.
 */

var commonService = angular.module('commonService', []);

commonService.factory('$_test', function () {
    'ngInject';
    return {
        add: function (str) {
            return 'hello ' + str + ' !';
        }
    }
});

export default commonService;