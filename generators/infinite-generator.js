function* looper() {
    let i = 0;
    while (true) {
        yield ++i;
    }
}

let gen = looper();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
