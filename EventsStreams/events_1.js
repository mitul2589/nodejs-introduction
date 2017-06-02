var EventEmitter = require('events').EventEmitter;

function getResource(c) {
   var e = new EventEmitter();
   process.nextTick(function() {
      e.emit('start');
      var counter = 0;
      setInterval(function() {
          e.emit('progress', ++counter);
          if (c === counter) {
              e.emit('done');
              clearInterval(this);
          }
      }, 10);
   });
   return(e);
}

var event = getResource(5);

event.on('start', function() {
    console.log('Started...!');
});

event.on('progress', function(count) {
    console.log('I have done with ' + count + ' events.');
});

event.on('done', function() {
    console.log('Done...!');
}); 