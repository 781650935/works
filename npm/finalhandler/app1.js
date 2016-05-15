/**
 * Created by Rayr Lee on 2015/10/29.
 */

var finalhandler = require('finalhandler')
var http = require('http')

var server = http.createServer(function (req, res) {
    var done = finalhandler(req, res);
    done();
})

server.listen(3000);