let aMike = {
    * whine() {
        while (true) yield "waah";
    },
    * philosophize() {
        while (true) yield "i am better than you";
    },
};

let {philosophize} = aMike;

for (let stmt of philosophize()) {
    console.log(stmt);
}
