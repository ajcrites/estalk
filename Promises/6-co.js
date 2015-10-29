let co = require("co");
let timeout = require("timeout-then");

co(function* () {
    yield timeout(1000);

    console.log("it has been a second");
});
