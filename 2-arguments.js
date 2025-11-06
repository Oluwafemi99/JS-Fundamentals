// initializing arguments
const args = process.argv.slice(2);
// using if condintion to check for arguments
if (args.length == 0) {
    console.log('No argument');
}else if (args.length == 1) {
    console.log('Argument found')
}else{
    console.log('Arguments found')
}