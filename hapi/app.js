/**
 * Created by Rayr Lee on 2016/1/20.
 */

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        console.log(reply.file);
        return reply('hello world');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});