let Promise = require("bluebird");

new Promise(resolve => resolve())
.then(() => "not a promise")
.then(nonPromiseValue => {
    console.log(nonPromiseValue);
    return new Promise(resolve => resolve("promise value"))
})
.then(promiseValue => console.log(promiseValue == "promise value"));
