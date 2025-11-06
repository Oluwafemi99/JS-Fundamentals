// calculating Factorial
function factorial(n) {
    if (isNaN(n) || n<=0) {
        return 1;
    }else {
        return n * factorial(n-1);
    }
}

const num = Number(process.argv.slice(2));
let result = factorial(num);
console.log(result);
