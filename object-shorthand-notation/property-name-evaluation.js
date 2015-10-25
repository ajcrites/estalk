let a = "b";
let x = {a};
let q = {
    [x.a]: "z",
    [["a", "b"].reverse().join('')]: () => {
    }
};

console.log(q);
