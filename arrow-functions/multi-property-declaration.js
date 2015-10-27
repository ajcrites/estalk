console.log(

// 10
[4,3,2,1].reduce(function (prev, next) {
    return prev + next;
}, 0)

);

console.log(

// 10
[4,3,2,1].reduce((prev, next) => {
    return prev + next;
}, 0)

);
