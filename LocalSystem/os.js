var os = require('os');
console.log("type--->" + os.type());
console.log("cpus--->"+ os.cpus());
console.log("platform--->" + os.platform());
console.log("freemem--->" + os.freemem());
console.log("loadag--->" + os.loadavg());
console.log(os.networkInterfaces());

