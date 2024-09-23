function converteMedida(numero, unidade){
    if (unidade == "m"){
        let valorMedida = numero * 100
        console.log(`${numero}${unidade} = ${valorMedida}cm`)
    }

    else if (unidade == "mm"){
        let valorMedida = numero / 10
        console.log(`${numero}${unidade} = ${valorMedida}cm`)
    }
    else if (unidade == "km") {
        let valorMedida = numero * 100000   
        console.log(`${numero}${unidade} = ${valorMedida}cm`)
    }
}

converteMedida(2,"m")
converteMedida(40,"mm")
converteMedida(13,"km")
