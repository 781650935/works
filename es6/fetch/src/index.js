
function $(str){
    return document.querySelector(str);
}

function *pollForWeatherInfo() {
    yield fetch('/api/currentWeather', {
        method: 'get'
    }).then(function (d) {
        var json = d.json();
        return json;
    });
}

//$('#btn').addEventListener('click', function(){
//    var gen = pollForWeatherInfo();
//    var data = gen.next().value;
//    data.then(function(d){
//        console.log(d);
//    });
//}, false);

$('#btn').addEventListener('click', function(){
    var gen = fetch('/api/currentWeather', {
        method: 'get'
    }).then(function (d) {
        var json = d.json();
        return json;
    });

    gen.then(function(d){
        console.log(d);
    })
}, false);
