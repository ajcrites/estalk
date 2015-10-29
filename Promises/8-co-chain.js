let co = require("co");

co(function* () {
    let nonPromiseValue = yield new Promise(resolve => resolve()).then(() => "not a promise");
    console.log(nonPromiseValue);

    let promiseValue = yield new Promise(resolve => resolve("promise value"));
    console.log(promiseValue);
});
