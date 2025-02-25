// //callback

// function sumOfPower(a,b, callback){
//     let x = callback(a);
//     let y = callback(b);
//     return x + y;
// }

// function square(n){
//    return  n*n;
// }

// function cube(n){
//     return n*n*n;
// }


//  console.log(sumOfPower(2,3,square));
//  console.log(sumOfPower(2,3,cube));


//  // async function
//  // setTimeout, setTimeInterval, readFile, writeFile etc.

//  function loop100(){
//     let sum=0;
//     for(let i=0; i<100; i++){
//         sum+=i;
//     }
//     console.log(sum);
    
//  }

//  setTimeout(loop100,5000);

//  console.log("Here we go...");


// *****
 console.log("at the top 1");

 function PormisFunction(){
    console.log("inside function 3");
    
    return new Promise((reslove)=>{
        console.log("inside Promise 4");
        
        setTimeout(()=>{
            console.log("setTimeout called 5");

            reslove("resolve done");
            
        })
    })
 };
 
 console.log("In the middle 2");

 PormisFunction().then((value)=>{
    console.log("Promise resolved 6 ");
    
    console.log(value);
    
 })
 
 



 //async / await

 
 