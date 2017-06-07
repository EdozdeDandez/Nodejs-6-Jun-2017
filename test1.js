var http = require('http');
var fs = require("fs");

var server = http.createServer(function (req, res){
	fs.readFile('file.txt', function (err, data) {
		if (err) {
			return console.error(err);
		}
		console.log("Asynchronous read: " + data.toString());
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("<!DOCTYPE html>");
	    res.write("<html>");
	    res.write("<head>");
	    res.write("<title>Node.Js</title>");
	    res.write("</head>");
	    res.write("<body>");
	    res.write(data.toString());
	    res.write("</body");
	    res.write("</html");
	    res.end();
	});
	var content = fs.readFileSync('file.txt');
	console.log("Synchronous read: " + content.toString());

})
server.listen(3000, (err)=>{
  if (!err) {
    return console.log('Server listening on port 3000')
  }
})