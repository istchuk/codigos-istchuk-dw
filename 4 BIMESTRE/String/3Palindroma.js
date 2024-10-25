function reverseString(string){
    return string.split('').reverse().join('')
}

function isPalindrome(text){
    if (text === reverseString(text)){
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false