async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 1000));

    console.log("done");
}();
