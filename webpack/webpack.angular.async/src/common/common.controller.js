/**
 * Created by Rayr Lee on 2015/12/14.
 */

import commonService from './common.service';

class Test {

    constructor($timeout, $_test) {
        'ngInject';
        this.str = $_test.add('lilei');
        this.$timeout = $timeout;
    }

    show() {
        this.$timeout(()=> {
            console.log(this.str);
        }, 2000);
    }

}

export default angular.module('commonController', [commonService.name])
    .controller('testController', Test);
