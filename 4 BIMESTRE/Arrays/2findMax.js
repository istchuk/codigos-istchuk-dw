function findMax(arr){
    let max = arr[0]
    let i = 1

    while (i < arr.length){
        if (arr[i] > max){
            max = arr[i]
        }
        i++
    }
    return max
}

console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10