let Promise = require("bluebird");
let timeout = require("timeout-then");

Promise.all([
    timeout(1000).then(() => console.log("fast")),
    timeout(500).then(() => console.log("faster")),
    timeout(250).then(() => console.log("fastest")),
])
.then(() => console.log("all promises complete"));
