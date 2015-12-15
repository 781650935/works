/**
 * Created by Rayr Lee on 15/12/14.
 */

class IndexController {
    constructor() {
        'ngInject';
        this.title = '这是首页!';
    }

    show (str){
        console.log(str);
    }
}

export default angular.module('IndexModule', []).controller('IndexController', IndexController);