let obj = {
    mine: "yours",
    speak: () => {
        console.log(this.mine);
    }
}

obj.speak();
