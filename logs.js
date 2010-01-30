var sys = require("sys"),
    http = require("http");

http.createServer(function (request, response) {
	sys.puts("received...");
	var content = "";
	request.addListener("body", function(chunk) {
		sys.puts("data...");
		content += chunk;
	    });
	request.addListener("complete", function() {
		sys.puts("received: " + content);
		response.sendHeader(200, {"Content-Type": "text/plain"});
		response.sendBody("received message of length " + content.length);
		response.finish();		
	    });

	sys.puts(request);

    }).listen(8000);
sys.puts("Server running at http://127.0.0.1:8000/");
