// interface User{
//     name: string;
//     age: number;
// };

// function sumOfAge(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// let result = sumOfAge(
//     {
//         name:"shorif",
//         age: 24,
//     },
//     {
//         name:"shakib",
//         age: 26,
//     }
// )

// console.log(result);



// **pick**
interface User{
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

//it convert int User interface to this

// type UpdateProps = {
//     name: string;
//     age: number;
//     email: string;
// }


function updateUser(updateProps: UpdateProps){
    //hit the database and update the user
}



// ** partial **

type UpdatePropsOptional = Partial<UpdateProps>

// its convert into UpdateProps into this 

// type UpdatePropsOptional = {
//     name?: string | undefined;
//     age?: number | undefined;
//     email?: string | undefined;
// }



//**readonly */

type Users = {
    readonly name: string;
    readonly age: number;
}

const user:Users = {
    name:"shorif",
    age:20

}

// users.name = "ahammed"  => is not allowed for readonly



//** Record */

type UserAge = {
    [key:string]: number;
}

//using Record

type User1 = Record<string,number>

const users : User1 ={
    "shorif": 24,
    "rakib": 23,
}



//** Exclude */

type EventType = "click" | "scroll" | "mousemove";

type ExcludeEvent = Exclude<EventType,"scroll">

const handleEvent = (event:ExcludeEvent)=>{
    console.log(`handling event: ${event}`);
    
}

handleEvent("click")
handleEvent("mousemove")
// handleEvent("scroll")    //its wrong because Excludeing scroll