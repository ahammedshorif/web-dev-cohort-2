var a = "shorif";
console.log(a);
function sum(x, y) {
    return x + y;
}
var result = sum(1, 2);
console.log(result);
function isLegal(a) {
    if (a > 18)
        return true;
    else
        return false;
}
// create a function that takes another function as input, and runs it after 1 second
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
runAfter1S(function () {
    console.log("hello");
});
