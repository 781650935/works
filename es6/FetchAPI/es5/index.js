'use strict';

var marked0$0 = [pollForWeatherInfo].map(regeneratorRuntime.mark);

function $(str) {
    return document.querySelector(str);
}

function pollForWeatherInfo() {
    return regeneratorRuntime.wrap(function pollForWeatherInfo$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return fetch('/api/currentWeather', {
                    method: 'get'
                }).then(function (d) {
                    var json = d.json();
                    return json;
                });

            case 2:
            case 'end':
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

//$('#btn').addEventListener('click', function(){
//    var gen = pollForWeatherInfo();
//    var data = gen.next().value;
//    data.then(function(d){
//        console.log(d);
//    });
//}, false);

$('#btn').addEventListener('click', function () {
    var gen = fetch('/api/currentWeather', {
        method: 'get'
    }).then(function (d) {
        var json = d.json();
        return json;
    });

    gen.then(function (d) {
        console.log(d);
    });
}, false);