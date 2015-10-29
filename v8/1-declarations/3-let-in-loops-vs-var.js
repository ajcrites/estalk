for (var print10ALot = 0; print10ALot < 10; ++print10ALot) {
    setImmediate(() => console.log(print10ALot));
}

for (let printTheRightNumbers = 0; printTheRightNumbers < 10; ++printTheRightNumbers) {
    setImmediate(() => console.log(printTheRightNumbers));
}
