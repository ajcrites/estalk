let Promise = require("bluebird");

new Promise(resolve => resolve("value"))
.then(value => console.log(value));
