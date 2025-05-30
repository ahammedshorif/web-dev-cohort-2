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

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething1(keyPressed: Direction){
    if(keyPressed== Direction.Up){

    }
    else if(keyPressed == Direction.Right){

    }

}

doSomething1(Direction.Up)
doSomething1(Direction.Right)