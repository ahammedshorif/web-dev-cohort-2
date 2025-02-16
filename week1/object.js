const dog = {
    name: "dog",
    letCount: 4,
    speaks: "bhow bhow",
}

const cat = {
    name: "cat",
    letCount: 4,
    speaks: "meow meow",
}

function printObj(animal){
    console.log("animal " + animal["name"] + " has " + animal["letCount"] );
}

printObj(dog)
printObj(cat)
