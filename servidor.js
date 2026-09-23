
var http = require('http');

var servidor = http.createServer(function (req, res) {
  res.end('Oi! Sou seu servidor.');
});

servidor.listen(3000, function () {
  console.log('Ligado em http://localhost:3000');
});