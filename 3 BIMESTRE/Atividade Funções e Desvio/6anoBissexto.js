function anoBissexto(ano){
    if (ano % 400 == 0){
        console.log(`${ano} é um ano bissexto.`)
    } 
    else if ((ano % 4 == 0) && (ano % 100 != 0)){
        console.log(`${ano} é um ano bissexto.`)
    }
    else {
        console.log(`${ano} não é um ano bissexto.`)
    }
}

anoBissexto(2024)
anoBissexto(2020)
anoBissexto(2019)
anoBissexto(2018)
