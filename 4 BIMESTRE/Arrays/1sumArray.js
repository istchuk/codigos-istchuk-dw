function sumArray(arr){
    let sum = 0
    let i = 0

    while (i < arr.length){
        sum += arr[i]
        i++
    }

    return sum

}

console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
console.log(sumArray([10, -10, 10])); // Deve exibir: 10