"use strict";
let a = 10;
console.log(a);
//interfaces
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal({
    firstName: "Ahammed",
    lastName: "Shoirf",
    age: 24,
});
