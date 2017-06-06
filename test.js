var http = require('http');

var server = http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var body = [];
  
  request.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();

    response.on('error', function(err) {
      console.error(err);
    });

    response.writeHead(200, {'Content-Type': 'text/plain'})

    var responseBody = {
      headers: headers,
      method: method,
      url: url,
      body: body
    };

    response.end(JSON.stringify(responseBody));
    
  });
})

server.listen(3000, (err)=>{
	if (!err) {
		return console.log('Server listening on port 3000')
	}
})
