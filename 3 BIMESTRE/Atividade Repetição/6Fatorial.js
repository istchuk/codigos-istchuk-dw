function fatorial(n){
    
    if (n < 0){
        return false
    }
    
    if (n == 0 || n == 1){
        return 1;
    }
    
    i = n
    let resultado = 1

    while (i > 1){
        resultado *= i
        i -= 1
    }

    return resultado
}

console.log(fatorial(10)); 
console.log(fatorial(0)); 
console.log(fatorial(8)); 