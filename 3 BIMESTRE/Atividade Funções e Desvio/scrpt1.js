function classificacaoIdade(n){
    if (n >= 5 && n <= 7){
        console.log("Classificação: Infantil A")
    } else if (n >= 8 && n <= 10){
        console.log("Classificação: Infantil B")
    } else if (n >= 11 && n <= 13){
        console.log("Classificação: Juvenil A")
    } else if (n >= 14 && n <= 17){
        console.log("Classificação: Juvenil B")
    } else if (n >= 18){
        console.log("Classificação: Adulto")
    } else {
        console.log("Não pode participar do campeonato")
    }
}

classificacaoIdade(2)
classificacaoIdade(5)
classificacaoIdade(8)
classificacaoIdade(11)
classificacaoIdade(14)
classificacaoIdade(18)

