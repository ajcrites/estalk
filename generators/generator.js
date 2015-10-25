function* generate() {
    yield "first value";
    let x = yield "second value";
    yield x;

    console.log("it is done");
}

let gen = generate();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next("foo").value);
console.log(gen.next().done);
