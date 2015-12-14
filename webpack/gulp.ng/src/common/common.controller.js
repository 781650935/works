/**
 * Created by Rayr Lee on 2015/12/14.
 */

import commonService from './common.service';

class Add() {
    constructor($_test) {
        'ngInject';
        this.str = $_test.add('lilei');
    };
}

export default angular.module('commonController', [commonService.name])
    .controller('test', Add);
