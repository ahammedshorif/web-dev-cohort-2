function square(a){
    return a*a;
}

function sumOfFun(a,b,fn){
    const sum1= fn(a);
    const sum2= fn(b);
    return sum1+sum2;
}
function cube(a){
    return a*a*a;
}

let ans = sumOfFun(3,4,square);
let ans2 = sumOfFun(3,1,cube);
console.log(ans);
console.log(ans2);


