process.on('message', function(m) {
   if (m.cmd === 'double') {
       console.log(m.number*2);
       process.send({answer: m.number*2});
   } 
   if (m.cmd === 'done') {
       console.log('Done');
       process.exit();
   }
});