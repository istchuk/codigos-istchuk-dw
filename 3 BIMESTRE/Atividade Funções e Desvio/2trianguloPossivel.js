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
    console.log(`Os lados ${lado1}, ${lado2} e ${lado3} formam um triângulo`)
}else {
    console.log(`Os lados ${lado1}, ${lado2} e ${lado3} NÃO formam um triângulo`)
}