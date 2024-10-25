function countOccurrences(palavra, letra){
    let i = 0
    count = 0
    while (i < palavra.length){
        if (palavra.charAt(i) === letra){
            count += 1
        }
        i += 1
    }
    return count
}

console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3