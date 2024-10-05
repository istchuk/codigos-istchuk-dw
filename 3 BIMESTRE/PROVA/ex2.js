function tresNumeros(x, y, z){
    if ((x < y) && (x < z)){
        console.log(`Entre ${x}, ${y} e ${z}, o menor número é ${x}.`)
    } else if ((y < x) && (y < z)){
        console.log(`Entre ${x}, ${y} e ${z}, o menor número é ${y}.`)
    } else {
        console.log(`Entre ${x}, ${y} e ${z}, o menor número é ${z}.`)
    }
}

tresNumeros(10,11,12)
tresNumeros(87,27,90)
tresNumeros(3,2,1)