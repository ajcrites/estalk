let Promise = require("bluebird");
let timeout = require("timeout-then");

Promise.all(

["hoover", "coolidge", "taft", "kennedy"].map(
    prez => timeout(prez.length * 100).then(() => console.log(prez))
)

).then(() => console.log("all prez complete!"));
