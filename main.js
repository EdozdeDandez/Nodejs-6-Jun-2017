var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
})

server.listen(3000, (err)=>{
  if (!err) {
    return console.log('Server listening on port 3000')
  }
})