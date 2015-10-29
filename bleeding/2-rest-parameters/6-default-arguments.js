class Somethin {
    constructor({love = "courage"} = {}) {
        this.love = love;
    }
}

class SomethinElse extends Somethin {
    constructor({hate = "everything", ...opts} = {}) {
        super(opts);

        this.hate = hate;
    }

    emit() {
        console.log(this.love, this.hate);
    }
}

new SomethinElse({love: "wonder"}).emit();
new SomethinElse({hate: "nothing"}).emit();
new SomethinElse().emit();
