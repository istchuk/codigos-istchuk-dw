function tipoTriangulo(x, y, z){
    if (x == y && y == z){
        console.log("Os lados informados formam um triângulo equilátero")
    } else if((x == y && y != z) || (x == z && z !=y) || (y == z && z != x)){
        console.log("Os lados informados formam um triângulo isósceles")
    } else {
        console.log("Os lados informados formam um triângulo escaleno")
    }
}

function verificaTriangulo(l1, l2, l3) {
    if ((l1 + l2 > l3) && (l2 + l3 > l1) && (l1 + l3 > l2)) {
        return true;
    } else {
        return false;
    }
}

let lado1 = 10
let lado2 = 20
let lado3 = 15

if (verificaTriangulo(lado1,lado2,lado3)){
    console.log(`Os lados ${lado1}, ${lado2} e ${lado3} formam um triângulo`);
    tipoTriangulo(lado1, lado2, lado3)

}else {
    console.log(`Os lados ${lado1}, ${lado2} e ${lado3} NÃO formam um triângulo`)
}