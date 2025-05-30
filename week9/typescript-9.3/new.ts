// whithout emums

type KeyInput = "up" | "down" | "left" | "right";


function doSomething(keyPressed: KeyInput){
    if(keyPressed= "up"){

    }
}

doSomething("up")
doSomething("right")


// doSomething("hi") //wrong


//enums
// its default set Up=0,Down=1,Left=2,Right=2

// enum Direction {
//     Up, 
//     Down,
//     Left,
//     Right
// }


//also we can
enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

function doSomething1(keyPressed: Direction){
    if(keyPressed== Direction.Up){

    }
    else if(keyPressed == Direction.Right){

    }

}

doSomething1(Direction.Up)
doSomething1(Direction.Right)



//********* */
//this problem is solve with Generics

type Input = number | string;

function firstEl(arr: Input[]){
    return arr[0];
}

const value= firstEl(["shorif","hello",4])
// console.log(value.toUppercase()); //its not access default method of string or number 
//value type is : Input

// Generics

function identity<T>(arg: T): T{
    return arg;
}

let output1= identity<string>("shorif") // output1 type: string
let output2 = identity<number>(300)    //output2 type: number

console.log(output1,output2);



//now problem are solve

function getFirstEl<T>(arr: T[]): T{
    return arr[0];
}

const el= getFirstEl<string>(["shorif", "hello"])
const el2= getFirstEl<number>([29,49,78])
console.log(el.toUpperCase());

