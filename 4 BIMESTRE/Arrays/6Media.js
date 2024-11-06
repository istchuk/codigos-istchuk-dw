function average(arr) {
    let sum = 0
    let i = 0
    while (i < arr.length){
        sum += arr[i]
        i++
    }
    return sum / arr.length
}

console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20
