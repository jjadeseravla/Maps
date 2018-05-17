// const http = require('http');
// const fs = require('fs');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// fs.readFile('index.html', (err, html) => {
//   if(err) {
//     throw err;
//   }
//   const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html');
//     res.write(html);
//     res.end();
//   });
//
//   server.listen(port, hostname, () => {
//     console.log('Server started on port '+port);
//   });
// });

const http = require('http');
const fs = require('fs');
  path = require('path'),
  filePath = path.join(__dirname, 'index.html');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    } else {
        console.log(err);
    }
});
