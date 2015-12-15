/**
 * Created by Rayr Lee on 15/12/10.
 */

var commonService = angular.module('commonService', []);

commonService.factory('$_test', () => {
    'ngInject';
    return {
        add: (str) => {
            return 'hello ' + str + ' !';
        }
    }
});

export default commonService;