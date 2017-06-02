process.stdin.resume();

process.stdin.on('data', function(chunk) {
  process.stdout.write('data ' + chunk)
});

process.stdin.on('end', function() {
  process.stderr.write("End...!!!");
});

process.on('kill', function() {
    process.stderr.write("vxvxvxv");
});

console.log('process id' + process.pid);