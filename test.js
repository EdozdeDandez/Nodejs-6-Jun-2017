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

    response.writeHead(200, {'Content-Type': 'text/html'})

    var responseBody = {
      headers: headers,
      method: method,
      url: url,
      body: body
    };

    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Node.Js</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("<pre>");
    response.write("<code>");
    response.write(JSON.stringify(responseBody, null,"<br>"));
    response.write("</code");
    response.write("</pre");
    response.write("</body");
    response.write("</html");
    response.end();
    
  });
})

server.listen(3000, (err)=>{
	if (!err) {
		return console.log('Server listening on port 3000')
	}
})
