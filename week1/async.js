
function findSum(n){
    sum=0;
    for(let i=0;i<n;i++){
        sum += i;
    }
    return sum;
}

function findSumOfNums(){
    const sum =findSum(100);
    console.log(sum);
    
}

setTimeout(findSumOfNums,2000);
console.log("Hello");



const { log } = require("console");
//some async function

// fs.readFile()
// fetch()
// timeout()
// timeInterval()



const fs = require("fs");

// function readTheFile(cb){
//     fs.writeFileSync("a.txt",  "hello world");
// }
// readTheFile()

// fs.appendFileSync("a.txt"," new world");



// promise

  //examples

// function readTheFile(){
//     console.log("inside readTheFile");
//     // return promise
//     return new Promise(function(resolve, reject){
//         console.log("inside Promise");
        
//         fs.readFile("a.txt","utf-8", function(err,data){
//             console.log("before resolve promise");
            
//             resolve(data);
//             console.log("after resolve promise");
            
//         })
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// let a= readTheFile();
// a.then(onDone);


//
// var p= new Promise(function(resolve){
   
//    setTimeout(function(){
//      resolve("ha ha ha");
//    },2000)
// })

// function onDone(){
//     console.log(p);
    
// };

// p.then(onDone);


//async await

function newFunction(){
    let p= new Promise(function(resolve){

        setTimeout(function(){
            resolve("hi there");
        },2000)
        
    });
    return p;
}

async function main(){
    let value = await newFunction();
    console.log(value);
    
}

main();