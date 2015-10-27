let iter = {
    [Symbol.iterator]: function* () {
        yield "I iterate, but once";
    }
};

for (let tautology of iter) {
    console.log(tautology);
}
