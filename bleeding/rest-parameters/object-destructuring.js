let anAndrew = {
    other: "properties",
    hobbies: ["javascript", "rust", "elixir"],
    firstname: "Andrew",
    also: "exist",
    lastname: "Crites",
};

let {firstname, lastname, hobbies, ...etc} = anAndrew;

console.log(firstname, lastname, hobbies, etc, foo);
