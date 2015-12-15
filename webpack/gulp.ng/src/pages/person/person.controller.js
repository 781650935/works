/**
 * Created by Rayr Lee on 15/12/14.
 */

class PersonController {
    constructor() {
        'ngInject';
        this.title = '这是个人中心!';
    }
}

export default angular.module('PersonModule', []).controller('PersonController', PersonController);