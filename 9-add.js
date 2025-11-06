
function add (a, b) {
    return a+b;
}

const [first, second] = process.argv.slice(2);

let result = add(Number(first), Number(second));
console.log(result);
