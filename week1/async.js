
function findSum(n){
    sum=0;
    for(let i=0;i<n;i++){
        sum += i;
    }
    return sum;
}

function findSumOfNums(){
    const sum =findSum(100);
    console.log(sum);
    
}

setTimeout(findSumOfNums,2000);
console.log("Hello");
