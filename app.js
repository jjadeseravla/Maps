var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request starting...');

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
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
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8125);
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
