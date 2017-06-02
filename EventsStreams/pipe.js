var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

request('https://pluralsight.com').pipe(fs.createWriteStream('pluralsight.html'));

request('https://pluralsight.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.7z'));

