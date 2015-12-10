import $ from 'jquery';
import _ from 'underscore';

$('#div1').on('click', function () {

    require.ensure([], () => {

        var module = require('child2');
        $('.test-a').text(module(2));

    });

});

$('#div2').on('click', function () {

    require.ensure(['./js/child3.js'], (require) => {

        var module = require('child1');

        $('.test-a').text(module(2));

    }, 'test2015');

});