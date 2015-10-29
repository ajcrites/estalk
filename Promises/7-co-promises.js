let co = require("co");

co(function* () {
    throw "no!";
})
.catch(err => console.log("caught exception!", err))
