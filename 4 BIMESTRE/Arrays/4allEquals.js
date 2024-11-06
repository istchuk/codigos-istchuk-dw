function allEquals(arr){
    let i = 1
    
    if (arr.length === 0){
        return true
    }

    const firstElement = arr[0]

    while (i < arr.length){
        if (arr[i] !== firstElement){
            return false
        }
        i++
    } return true

}

console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false