/**
 * Created by Rayr Lee on 2015/11/5.
 */

var $ = require('jquery');
var _ = require('underscore');
var main = require('./main.js');

$('#div1').click(function(){
    $(this).css('background', 'blue');
    console.log(main(1));
});