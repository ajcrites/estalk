let Promise = require("bluebird");

new Promise((resolve, reject) => reject("it failed"))
.then(() => console.log("this will not be logged"))
.then(() => console.log("nor will this"))
.then(() => console.log("or this"))
.catch(rejection => console.log(rejection));
