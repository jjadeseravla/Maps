var http = require('http');
var fs = require('fs'); //file system module allow you to work with the file system on your computer.
var path = require('path'); //working with directories and file paths.

http.createServer(function (request, response) { //creates HTTP server object
    //console.log('request starting...');

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html'; //if file path is slash let it be index.html

    var extname = path.extname(filePath);  //get the extension from a file path
    var contentType = 'text/html';
    switch (extname) { // switch statements are a form of routing.  a more complex form is using express
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
            case '.xml':
                contentType = 'text/xml';
                break;
    }

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){ //Error No Such File or Directory
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500); //writehead method explicitly writes the status code and headers to the response stream. response object is a writable stream.
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end();//end function on streams can also take some optional data to send as the last bit of data on the stream
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8125); //listen method needs to be called on the server object to serve requests
console.log('Server running at http://127.0.0.1:8125/');


// const http = require('http');
// const fs = require('fs');
//   path = require('path'),
//   filePath = path.join(__dirname, 'index.html');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
//     if (!err) {
//         console.log('received data: ' + data);
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(data);
//         response.end();
//     } else {
//         console.log(err);
//     }
// });
