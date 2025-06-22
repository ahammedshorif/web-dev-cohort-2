interface User{
    name: string;
    age: number;
};

function sumOfAge(user1: User, user2: User){
    return user1.age + user2.age;
}

let result = sumOfAge(
    {
        name:"shorif",
        age: 24,
    },
    {
        name:"shakib",
        age: 26,
    }
)

console.log(result);
