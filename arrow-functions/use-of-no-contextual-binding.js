let eventualSpeaker = {
    speech: "I was told there would be beer",

    speakEventually() {
        setTimeout(() => {
            console.log(this.speech);
        }, 1000);
    },

    wrongSpeak() {
        let es = this;
        setTimeout(function () {
            console.log(this.speech);
            console.log(es.speech);
        }, 1000);
    },
};

eventualSpeaker.speakEventually();
eventualSpeaker.wrongSpeak();
