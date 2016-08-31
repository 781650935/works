/**
 * Created by Rayr Lee on 2015/12/8.
 */

var app = require('http').createServer(staticFn),
    io = require('socket.io')(app),
    serveStatic = require('serve-static'),
    finalhandler = require('finalhandler'),
    PORT = 8083;

var serve = serveStatic('public', {'index': ['index.html', 'index.htm']});

function staticFn(req, res) {
    var done = finalhandler(req, res)
    serve(req, res, done)
}

app.listen(PORT, function () {
    console.log('服务器开启成功，端口为' + PORT);
});

io.on('connection', function (socket) {

    socket.emit('connected', {
        message: '连接成功'
    });

    socket.broadcast.emit('new message', {
        message: '广播'
    });
})