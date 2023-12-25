var http = require("http");

// Creating an HTTP server
http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1 style="color:blue;text-align:center;">Hello Node!!!!</h1>\n');

    // Making the server listen on port 3000
}).listen(3000);

