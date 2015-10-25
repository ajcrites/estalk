for (var i = 0; i < 10; i++) {
    setImmediate(() => console.log(i));
}
for (let x = 0; x < 10; ++x) {
    setImmediate(() => console.log(x));
}
