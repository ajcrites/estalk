function printName({name = {first: "joe", last}} = {name: {first: "joe"}}) {
    // console.log(first, last);
    console.log(name);
}

printName();
printName({name: {last: "bubba"}});
