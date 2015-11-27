var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static('.'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var polls = 0;

app.get('/api/currentWeather', function (req, res) {

    if (polls < 5) {
        console.log("sending...empty");
        polls = polls + 1;
        res.send({});
    } else {
        console.log("sending...object");
        res.send({
            temperature: 25,
            sky: "Partly cloudy",
            humid: true
        });
        polls = 0;

    }
});

app.get('/api/app_02', function (req, res) {

    res.send({
        status: 'ok',
        data: {
            name: 'laohei',
            sex: '男',
            age: 28
        }
    });

});

app.post('/api/test_03', function (req, res) {

    console.log(req.body);

    res.json({
        status: 'ok',
        data: '成功'
    });

});

//app.get('/', function (request, response) {
//    response.sendFile(path.__currentDir + '/index.html');
//});

app.listen(8000, function () {
    console.log("Server started on port 8000...");
});
