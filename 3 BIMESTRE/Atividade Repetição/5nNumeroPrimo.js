function nPrimos(n){
    let i = 0
    let num = 2 //numero inicial (primeiro numero primo)

    function primo(n){ // mesma função do ex4
        if (n < 1){
            return false
        }
    
        for (let i = 2; i < n; i += 1){
            if (n % i == 0){
                return false ; 
            }
        }
    
        return true 
    }

    while (i <= n){
        if (primo(num)){
            console.log(num)
            i++
        }
        num ++
    }
}

nPrimos(10)