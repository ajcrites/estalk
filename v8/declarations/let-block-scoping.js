let uniquePerBlock = "outside if block";

if (true) {
    let uniquePerBlock = "inside if block";
    console.log(uniquePerBlock);
}

console.log(uniquePerBlock);
