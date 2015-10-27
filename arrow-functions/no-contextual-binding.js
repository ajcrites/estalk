let iDontHaveAThis = {
    mine: "yours",
    speak: () => {
        console.log(this.mine);
    }
}

iDontHaveAThis.speak();
