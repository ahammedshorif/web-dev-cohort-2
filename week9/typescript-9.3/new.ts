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
// its default set Up=1,Down=2,Left=3,Right=4

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