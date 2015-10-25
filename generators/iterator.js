let iter = {
    [Symbol.iterator]: function* () {
        yield "hi";
    }
};

for (let x of iter) {
    console.log(x);
}
