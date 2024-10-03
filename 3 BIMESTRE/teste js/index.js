let valorPeso = document.getElementById("peso")
let valorAltura = document.getElementById("altura")
let botaoCalcular = document.getElementById("calcular")
let divSaida = document.getElementById("divsaida")

botaoCalcular.onclick = calcularImc

function calcularImc(){
    let p = Number(valorPeso.value)
    let a = Number(valorAltura.value)

    let imc = p / a**a

    divSaida.innerText = "IMC:" + imc
}
