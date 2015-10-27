let speech = "grumble, grumble...";
let demandFood = function () {
    console.log(this.speech);
}

let moblin = {
    speech,
    demandFood,
};

moblin.demandFood();
