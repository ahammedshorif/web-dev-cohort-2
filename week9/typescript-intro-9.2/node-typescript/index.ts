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


//or

type costomType = number | string;

function greet(variable:costomType){
    console.log(variable)
}

greet(10);
greet("hello");


// intersection

type Employees ={
    name:string;
    startDate:Date;
}
type Manager={
    name:string;
    department:string;
}

type TeamLead = Employees & Manager;

const t: TeamLead ={
    name:"shorif",
    startDate:new Date(),
    department: "HR"
}


//IQ: What is the difference between interface an type?


// Array is typescript


type arrType= number[];    //number[]

function maxValue(arr: arrType){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max= arr[i]
        }
    }
  return max;
}

let mxv =maxValue([8,5,9,3,15]);
console.log(mxv);


type P = {
    fistname:string;
    lastname:string;
    age:number;
}

// array of object
function filterArray(arr: P[]){
  //>>>>
  
}
