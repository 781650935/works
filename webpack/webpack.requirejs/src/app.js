import $ from 'jquery';
import _ from 'underscore';
import common from './js/common';

console.log(common('world'));

$('#div1').on('click', function () {

    require.ensure(['child1'], () => {
        console.log(require('child3')(common)('child3'));
        //console.log(require('child1')(10));
    });

});

$('#div2').on('click', function () {

    require(['child2'], (child2) => {
        console.log(child2(10));
    });

});