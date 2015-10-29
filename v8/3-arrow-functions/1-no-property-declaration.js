setImmediate(function () {
    console.log("immediately called");
});

setImmediate(() => {
    console.log("immediately called");
});
