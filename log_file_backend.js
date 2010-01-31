var sys = require("sys"),
    posix = require("posix"),
    filename = "./logs.received",
    fd = posix.open(filename,
		    process.O_WRONLY | process.O_APPEND | process.O_CREAT,
		    process.S_IRWXU | process.S_IRGRP | process.S_IROTH
		    ).wait();

exports.record_message = function(request, msg) {
    posix.write(fd, msg);
}
