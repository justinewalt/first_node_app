var http = require('http');
http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('My first node app');
}).listen(8080);

console.log("Server running at http://localhost:8080/");