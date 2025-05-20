let a:string = "shorif"

console.log(a)


function sum(x:number,y:number):number{
    return x+y;
}

let result:number = sum(1,2)

console.log(result)

function isLegal(a:number):boolean{
    if(a>18)
        return true;
    else
        return false
}

// create a function that takes another function as input, and runs it after 1 second

function runAfter1S(fn: ()=> void){
    setTimeout(fn,1000)
}

runAfter1S(function(){
    console.log("hello");
    console.log("hello ubutu")
})