/**
 * Created by Rayr Lee on 2015/12/14.
 */

import commonService from './common.service';

class test {

    constructor($timeout, $_test) {
        'ngInject';
        this.str = $_test.add('lilei');
        this.show($timeout);
    }

    show($timeout) {
        $timeout(()=> {
            console.log(this.str);
        }, 2000);
    }

}

export default angular.module('commonController', [commonService.name])
    .controller('testController', test);
