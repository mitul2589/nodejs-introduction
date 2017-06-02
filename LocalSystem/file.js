var fs = require('fs');

if (fs.existsSync('temp')) {
    if(fs.existsSync('temp/file.js')) {
      fs.unlinkSync('temp/file.js');
    }
}



fs.writeFile('test.txt', 'This is test file', function(err) {
   fs.rename('test.txt', 'new.txt', function(err) {
      fs.stat('new.txt', function(err, stats) {
         console.log('file size: ' + stats.size);
         fs.readFile('new.txt', function(err, data) {
            console.log('file contents: ' + data);
         });
      });
   });
});