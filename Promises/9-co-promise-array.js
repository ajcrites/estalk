let co = require("co");
let timeout = require("timeout-then");

co(function* () {
    yield ["hoover", "coolidge", "taft", "kennedy"].map(prez => co(function* () {
        yield timeout(prez.length * 100);
        console.log(prez);
    }));

    console.log("all prez complete!");
});
