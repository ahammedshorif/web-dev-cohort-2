function square(n){
    return n*n;
}

function squareOfSum(a ,b){
    const sum1 = square(a);
    const sum2 = square(b);
    return sum1 + sum2
}

console.log(squareOfSum(3,4));