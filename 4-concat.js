// Write a script that prints two arguments passed to it, in the following format: “ is ”
let arg = process.argv.slice(2);

console.log(arg[0] + ' '+ 'is' + ' '+ arg[1])