var request = require('request');

var s = request('https://pluralsight.com');

s.on('data', function(chunk) {
   console.log('Chunk--->>> ' + chunk);
});

s.on('end', function() {
   console.log("Done...!!!");
});