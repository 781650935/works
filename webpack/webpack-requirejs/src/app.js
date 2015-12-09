import $ from 'jquery';
import _ from 'underscore';

$('#div1').on('click', function () {

    require.ensure([], () => {

        var module = require('./js/child2');
        $('.test-a').text(module(2));

    });

});

$('#div2').on('click', function () {

    require.ensure([], () => {

        var module = require('./js/child1');
        $('.test-a').text(module(2));

    });

});