function reverseArray(arr) {
    let reversedArray = []
    let index = 0
    let i = arr.length - 1

    while (i >= 0) {
        reversedArray[index] = arr[i]
        index++
        i--
    }

    return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]
