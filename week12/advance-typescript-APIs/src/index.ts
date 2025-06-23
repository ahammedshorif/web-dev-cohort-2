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