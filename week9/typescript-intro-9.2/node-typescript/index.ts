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


// interface implements class


interface Person{
    name: string;
    age:number;
    greet(phrase:string):void;
}


class Employee implements Person{
    name: string;
    age:number;

    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`)
    }
}

const employee1= new Employee("shorif", 24);
console.log(employee1.name)


// Type
//almost same as interface 

type Users = {
    fistname:string;
    lastname:string;
    age:number;
}