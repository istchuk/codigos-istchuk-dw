function getEvenNumbers(arr) {
    let evenNumbers = []
    let index = 0
    let i = 0

    while (i < arr.length){
        if (arr[i] % 2 === 0) {
            evenNumbers[index] = arr[i]
            index++
        }
        i++
    }
    return evenNumbers
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]
