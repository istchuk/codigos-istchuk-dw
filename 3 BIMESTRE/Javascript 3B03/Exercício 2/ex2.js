let inputTroco = document.getElementById("valorTroco")
let botaoCalcular = document.getElementById("calcular")
let divSaida = document.getElementById("saida")

function calculaTroco(){
    let troco = Number(inputTroco.value)  // Convertendo o valor para número
    let resto = troco % 20

    let cedulas20 = (troco - resto) / 20
    troco = troco - (cedulas20 * 20)

    resto = troco % 10
    let cedulas10 = (troco - resto) / 10
    let moeda1 = resto  // o resto aqui será o número de moedas de R$1,00

    console.log(cedulas20, cedulas10, moeda1)

    divSaida.innerText = "R$20,00: " + cedulas20  + "\nR$10,00: " + cedulas10 + "\nR$1,00: " + moeda1
}

botaoCalcular.onclick = calculaTroco
