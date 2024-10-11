function somaSerie(cont){
    let i = 1
    let j = 1
    let k = 1
    let resultado = 0

    while ( i <= cont){

        let multiplicacao = (j*k)
        resultado += multiplicacao

        while (j <= i){
            j += 1
        }
        while(k <= i*2){
            k+=2
        }
        i += 1
    }
    
    return resultado
}

console.log(somaSerie(3)) // 1 + 6 + 15 = 22
console.log(somaSerie(4)) // 1 + 6 + 15 + 28 = 50
