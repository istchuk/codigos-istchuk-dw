function calculaImc(){
    // Captura os elemntos HTML que serão manipulados pelo javascript
    let inputPeso = document.getElementById("peso")
    let inpuAltura = document.getElementById("altura")
    let divSaida = document.getElementById("saida")

    let botaoCalcular = document.getElementById("calcular")
    
    // ENTRADA
    let peso = Number(inputPeso.value)
    let altura = Number(inpuAltura.value) 
    
    // PROCESSAMENTO
    let imc = peso / (altura * altura)
    
    // SAIDA
    divSaida.innerText = imc
}

botaoCalcular.onclick = calculaImc
