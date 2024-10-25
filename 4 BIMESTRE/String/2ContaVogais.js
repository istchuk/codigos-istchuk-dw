function countVowels(string){
    const vogais = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    let i = 0

    const strMinuscula = string.toLowerCase()

    while (i < strMinuscula.length){
        if(vogais.includes(strMinuscula[i])){
            count++
        }
        i++
    }
    return count
}

console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("JavaScript")); // Deve exibir: 3