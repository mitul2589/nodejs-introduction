var fork = require('child_process').fork;

var child = fork(__dirname + '/childfork.js');

child.on('message', function(m) {
   child.send({cmd: 'done'});
});

child.send({
    cmd: 'double',
    number: 20
});

