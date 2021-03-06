var sys = require("sys"),
    http = require("http");

var backend = (process.ARGV[3]) ? process.ARGV[3] : "./log_file_backend";
var record_message = require(backend).record_message;

http.createServer(function (request, response) {
	var content = "";
	request.addListener("body", function(chunk) {
		content += chunk;
	    });
	request.addListener("complete", function() {
		record_message(request, content);
		response.sendHeader(200, {"Content-Type": "text/plain"});
		response.sendBody("stored message (" + content.length + ")");
		response.finish();
	    });
    }).listen(8000);
