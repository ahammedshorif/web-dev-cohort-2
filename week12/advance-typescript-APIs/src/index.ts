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


function updateUser(updateProps: UpdateProps){
    //hit the database and update the user
}