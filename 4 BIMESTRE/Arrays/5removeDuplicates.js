function removeDuplicates(arr){
    let uniqueArray = []
    let uniqueIndex = 0
    let i = 0

    while( i< arr.length){
        let isDuplicate = false

        let j = 0
        while (j < uniqueIndex){
            if (arr[i] === uniqueArray[j]){
                isDuplicate = true
                break
            }
            j++
        }

        if (!isDuplicate) {
            uniqueArray[uniqueIndex] = arr[i];
            uniqueIndex++;
        }

        i++
    }

    return uniqueArray
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
