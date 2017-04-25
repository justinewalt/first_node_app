var http = require('http');
var fs = require('fs');
var Emitter = require('events').EventEmitter;
var logger = new Emitter();
var server = http.createServer();

logger.on('error', function(message) {
    console.log('ERROR: ' + message);
});

http.createServer( function(request, response) {
    fs.readFile('index.html', function(err, content) {
        if (err) {
            response.writeHead(500, 'text/plain');
            logger.emit('error', err);
            response.end(err);
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(content)};
    });
}).listen(8080);

server.on('close', function() {
    console.log("Server is down, please try again later");
});

console.log("Server running at http://localhost:8080/");