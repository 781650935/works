var express = require('express');
var log4js = require('log4js');
var http = require('http');
var exec = require('child_process').exec;
var app = express();

app.set('port', process.env.PORT || 7000);
app.use(express.logger('dev'));

log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('logs/cheese.log'), 'lilei');

var logger = log4js.getLogger('lilei');

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.post('/git', function (req, res) {
    res.send(200, {
        info: 'post'
    });
    exec('/home/myapp/git.sh', function (err, stdout, stderr) {
        if (err) {
            logger.info(err.code);
        } else {
            logger.info(stdout);
        }
    });
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
