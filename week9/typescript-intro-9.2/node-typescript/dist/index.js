"use strict";
let a = 10;
console.log(a);
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const employee1 = new Employee("shorif", 24);
console.log(employee1.name);
function greet(variable) {
    console.log(variable);
}
greet(10);
greet("hello");
const t = {
    name: "shorif",
    startDate: new Date(),
    department: "HR"
};
function maxValue(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let mxv = maxValue([8, 5, 9, 3, 15]);
console.log(mxv);
// array of object
function filterArray(arr) {
    //>>>>
}
