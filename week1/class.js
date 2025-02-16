class Animal{
    constructor(name, type, speak){
        this.name = name;
        this.type = type;
        this.speaks = speak;
    }
    speakss(){
        console.log("hi there " + this.speaks);
    }

}

// create objects
let dog = new Animal("speed", "indian dog", "bhow bhow");
let cat = new Animal("cat", "indian cat", "mewo mewo");

//print Object values
console.log(`Animal name: ${dog.name} and type: ${dog.type}`);
console.log(`Animal name: ${cat.name} and type: ${cat.type}`);
dog.speakss();
