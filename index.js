var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(301, {Location: 'http://j.gs/FUYt'} );
  res.end();
}).listen(8080);
