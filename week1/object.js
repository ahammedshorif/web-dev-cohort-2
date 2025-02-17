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

// printObj(dog)
// printObj(cat)

// convert object to string
const catSting = JSON.stringify(cat);

// convert string to object
const catObj = JSON.parse(catSting);


// console.log(catSting);
// console.log(catObj);




const sampleObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
};

let key = Object.keys(sampleObject);
let value = Object.values(sampleObject);
let entries = Object.entries(sampleObject);
let assings = Object.assign(sampleObject, {name: "shorif", age: "24"});

console.log(key);
console.log(value);
console.log(entries);
console.log(assings);


