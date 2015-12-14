/**
 * Created by Rayr Lee on 15/12/14.
 */


export default angular.module('IndexDirective', []).directive('ngEnter', function () {
    return {
        restrict: 'EA',
        link: function (scope, ele, attr) {
            ele.bind('keydown keypress', function (e) {
                if (e.which === 13) {
                    scope.$apply(attr.ngEnter);
                    e.preventDefault();
                }
            });
        }
    }
});