let inputDistancia = document.getElementById("distancia")
let inputPreco = document.getElementById("valorLitroCombustível")
let botaoCalcular = document.getElementById("calcular")
let divSaida = document.getElementById("saida")

function calculaCombustivel(){
    let distancia = Number(inputDistancia.value)
    let preco = Number(inputPreco.value)

    let valorTotal =(distancia / 10) * preco + 65.5

    console.log(valorTotal)

    divSaida.innerText = "Valor da Viagem: R$" + valorTotal.toFixed(2)
}

botaoCalcular.onclick = calculaCombustivel