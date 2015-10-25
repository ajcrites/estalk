function* generate() {
    yield 1;
    yield 2;
    yield 3;
}

for (let x of generate()) {
    console.log(x);
}
