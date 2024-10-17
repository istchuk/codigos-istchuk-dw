// function tresNumeros(x, y, z){
//     if ((x < y) && (x < z)){
//         console.log(`Entre ${x}, ${y} e ${z}, o menor número é ${x}.`)
//     } else if ((y < x) && (y < z)){
//         console.log(`Entre ${x}, ${y} e ${z}, o menor número é ${y}.`)
//     } else {
//         console.log(`Entre ${x}, ${y} e ${z}, o menor número é ${z}.`)
//     }
// }

// tresNumeros(10,11,12)
// tresNumeros(87,27,90)
// tresNumeros(3,2,1)

function menor(a, b, c){
    if (a <= b && a <= c){
        return a
    } else if (b <= c && b <= a){
        return b
    } else {
        return c
    }
}

console.log(menor(10,11,12))
console.log(menor(87,27,90))
console.log(menor(3,2,1))
