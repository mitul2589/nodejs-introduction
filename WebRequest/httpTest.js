var http = require('http');
/*http.createServer(function(req, res) {
  res.end("Hello World");
}).listen(3000);
*/

var options = {
   host: 'www.google.com',
   port: 80,
   path: '/',
   method: 'GET'
};

var req = http.request(options, function(res) {
    res.pipe(process.stdout);
});

req.end();