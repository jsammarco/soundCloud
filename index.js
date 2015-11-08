/*jslint nomen:true, node:true, browser:true, devel:true */
(function () {
    "use strict";

    var express = require('express'),
        app = express(),
        host,
        port,
        server;

    app.use('/', express.static(__dirname + '/public'));

    app.get('/', function (req, res) {
        res.send('Hello World!');
        return req;
    });

    server = app.listen(3000, function () {
        host = server.address().address;
        port = server.address().port;

        console.log('Server at http://%s:%s', host, port);
    });

}());