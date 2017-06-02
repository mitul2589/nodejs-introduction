var util = require('util');
var EventEmitter = require('events').EventEmitter;

function getResource(c) {
   var me = this;
   process.nextTick(function() {
      me.emit('start');
      var counter = 0;
      setInterval(function() {
          me.emit('progress', ++counter);
          if (c === counter) {
              me.emit('done');
              clearInterval(this);
          }
      }, 10);
   });
}

util.inherits(getResource, EventEmitter);

module.exports = getResource;