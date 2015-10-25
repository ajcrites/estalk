console.log(

[4,3,2,1].reduce(function (prev, next) {
    return prev + next;
}, 0)

);

console.log(

[4,3,2,1].reduce((prev, next) => prev + next)

);
