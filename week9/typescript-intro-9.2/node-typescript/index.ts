let a:number= 10;
console.log(a)


//without interfaces

// function isLegal(user:{
//     firstName: string;
//     lastName:string;
//     age:number;
// }){
//     if(user.age>18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// isLegal({
//     firstName:"Ahammed",
//     lastName:"Shoirf",
//     age:24,
// })


//interfaces


interface User{
    firstName:string;
    lastName:string;
    age:number;
    email?:string; //it's option field
}


function isLegal(user:User){
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}