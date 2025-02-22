//callback

function sumOfPower(a,b, callback){
    let x = callback(a);
    let y = callback(b);
    return x + y;
}

function square(n){
   return  n*n;
}

function cube(n){
    return n*n*n;
}


 console.log(sumOfPower(2,3,square));
 console.log(sumOfPower(2,3,cube));


 // async function
 // setTimeout, setTimeInterval, readFile, writeFile etc.
 