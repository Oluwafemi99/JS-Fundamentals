const x = process.argv.slice(2);

let num = Number(x);

if (isNaN(num)) {
    console.log('Missing number of occurrences')
}else {
    for (i=0; i<num; i++) {
        console.log('C is fun')
    }
}