/**
 * Created by Rayr Lee on 2015/12/8.
 */

var socket = io();

socket.on('connected', function (data) {
    console.log(data);
});

socket.on('new message', function (data) {
    console.log(data);
});