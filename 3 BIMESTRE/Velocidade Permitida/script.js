let velocidadeVia = document.getElementById("velocidadeVia");
let velocidadeCarro = document.getElementById("velocidadeVeiculo");
let divSaida = document.getElementById("divSaida");
let botaoCalcular = document.getElementById("calcular");

function multa(){
    let vv = Number(velocidadeVia.value);
    let vc = Number(velocidadeCarro.value);

    let excesso = vc / vv;
    let excessoPercent = (excesso - 1) * 100


    if (excesso > 1.5) {
        divSaida.innerText = "Você atingiu " + excessoPercent.toFixed(0) + "% da velocidade permitida, sua multa é de R$880,41.";
        divSaida.classList.add('divSaida');
    } else if (excesso > 1.2) {
        divSaida.innerText = "Você atingiu " + excessoPercent.toFixed(0) + "% da velocidade permitida, sua multa é de R$195,29.";
        divSaida.classList.add('divSaida');

    } else if (excesso > 1) {
        divSaida.innerText = "Você atingiu " + excessoPercent.toFixed(0) + "% da velocidade permitida, sua multa é de R$130,16.";
        divSaida.classList.add('divSaida');

    } else {
        divSaida.innerText = "Sem multas por excesso de velocidade.";
    }

}

botaoCalcular.onclick = multa   