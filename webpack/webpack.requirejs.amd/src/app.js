import $ from 'jquery';
import _ from 'underscore';

$('#div1').on('click', function () {

    require(['child2'], function(child2) {
        console.log(child2(10));
    });

});

$('#div2').on('click', function () {
    require(['child1'], function(child1) {
        console.log(child1(10));
    });
});