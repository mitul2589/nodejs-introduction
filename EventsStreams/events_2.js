var Resource = require('./resource');

var event = new Resource(5); 

event.on('start', function() {
    console.log('Started...!');
});

event.on('progress', function(count) {
    console.log('I have done with ' + count + ' events.');
});

event.on('done', function() {
    console.log('Done...!');
}); 