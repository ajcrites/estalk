function* generate() {
    yield "first yielded value";
    let injectedValue = yield "second yielded value";
    yield injectedValue;

    console.log("it is done");
}

let gen = generate();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next("injected value").value);
console.log(gen.next().done);
