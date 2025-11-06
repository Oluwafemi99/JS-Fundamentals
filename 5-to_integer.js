// script that covert to interger or print not a number
const args = process.argv.slice(2)

let num = Number(args)

if (!isNaN(num)) {
    console.log(num)
}else {
    console.log('Not a number')
}