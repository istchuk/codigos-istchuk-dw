function mergeArrays(arr1, arr2) {
    let mergedArray = []
    let index = 0
    let i = 0
    let j = 0

    while (i < arr1.length){
        mergedArray[index] = arr1[i]
        index++
        i++
    } 

    while (j < arr2.length) {
        mergedArray[index] = arr2[j]
        index++
        j++
    }

    return mergedArray
}

console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]
