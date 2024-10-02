function primo(n){
    if (n < 1){
        return false
    }

    for (let i = 2; i < n; i += 1){
        if (n % i == 0){
            return false ; //numero primo não tem divisor que seja diferente dele e de 1
        }
    }

    return true //se nao encontrar nenhum divisor, o número é primo
}

let numero1 = 7

if (primo(numero1)){
    console.log(`O número ${numero1} é primo.`)
} else{
    console.log(`O número ${numero1} não é primo.`)
}