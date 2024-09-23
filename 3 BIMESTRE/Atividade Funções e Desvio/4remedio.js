function quantidadeMedicamento(idade,peso){
    if (idade >= 12){
        if (peso >= 60){
            console.log(`Quantidade de medicamento que alguém com ${idade} anos e ${peso}kg deve tomar: 1000mg / ${(1000 / 500) * 20} gotas.`)
        } else {
            console.log(`Quantidade de medicamento que alguém com ${idade} anos e ${peso}kg deve tomar: 875mg / ${(875 / 500) * 20} gotas.`)
        }
    } else{
        if (peso >= 5 && peso <= 9){
            console.log(`Quantidade de medicamento que alguém com ${idade} anos e ${peso}kg deve tomar: 125mg / ${(125 / 500) * 20} gotas.`)
        } 
        else if (peso > 9 && peso <= 16){
            console.log(`Quantidade de medicamento que alguém com ${idade} anos e ${peso}kg deve tomar: 250mg / ${(250 / 500) * 20} gotas.`)
        } 
        else if (peso > 16 && peso <=24){
            console.log(`Quantidade de medicamento que alguém com ${idade} anos e ${peso}kg deve tomar: 500mg / ${(500 / 500) * 20} gotas.`)
        } 
        else if (peso > 24 && peso < 60){
            console.log(`Quantidade de medicamento que alguém com ${idade} anos e ${peso}kg deve tomar: 750mg / ${(750 / 500) * 20} gotas.`)
        } else {
            console.log("O peso deve ser maior que 5kg.")
        }
    }
}

quantidadeMedicamento(12,50)
quantidadeMedicamento(15,70)
quantidadeMedicamento(5,30)
quantidadeMedicamento(2,10)