function countOccurrences(arr, element){
    let count = 0
    let i = 0

    while (i < arr.length){
        if (arr[i] === element){
            count++
        }
        i++
    } 
    return count
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2