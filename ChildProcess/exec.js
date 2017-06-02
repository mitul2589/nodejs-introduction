var exec = require('child_process').exec;

var child = exec('mkdir temp', function(err, stdout, stderr) {
    if (err) {
        console.log("Error");
    } else {
        console.log("Success");
    }
});

console.log(child.pid);

