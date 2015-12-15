/**
 * Created by Rayr Lee on 15/12/14.
 */

export default angular.module('IndexDirective', []).directive('ngTest',  () => {
    return {
        restrict: 'EA',
        replace: true,
        template: '<h3>{{vm.title}} 指令</h3>'
    }
});