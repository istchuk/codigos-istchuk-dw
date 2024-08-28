let inputCapital = document.getElementById("capital")
let inputTaxa = document.getElementById("taxa")
let inputPeriodo = document.getElementById("periodo")
let divSaida = document.getElementById("saida")
let botaoCalcular = document.getElementById("calcular")

botaoCalcular.onclick = calculaMontante

function calculaMontante(){

    // capturando elementos html
    let capital = Number(inputCapital.value)
    let taxa = Number(inputTaxa.value)
    let periodo = Number(inputPeriodo.value)

    // calculo
    let montante = capital * ((1 + (taxa / 100))**periodo)

    divSaida.innerText = "Montante: R$" + montante.toFixed(2) //Para não ficar muito longo o número
}
