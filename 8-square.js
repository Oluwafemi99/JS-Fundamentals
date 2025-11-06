const x = process.argv.slice(2);
let num = Number(x);

if (isNaN(num)) {
    console.log('Missing size');
}else {
    for (i=0; i<num; i++) {
        console.log('X'.repeat(num))
    }
}