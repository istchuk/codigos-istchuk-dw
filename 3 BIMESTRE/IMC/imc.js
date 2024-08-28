

// Captura dos elementos HTML que serão manipulados pelo javascript
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")

let botaoCalcular = document.getElementById("calcular")
// Vincula a função ao clique do botão
botaoCalcular.onclick = calculaImc 

function calculaImc(){
 
    // ENTRADA     
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    // PROCESSAMENTO
    let imc = peso / (altura * altura)

    // SAÍDA
    divSaida.innerText = imc

}