function replaceChar(str, oldChar, newChar){
    let result = ""

    for(let i = 0; i < str.length; i++){
        if (str.charAt(i === oldChar)){
            result += newChar
        } else {
            result += str.charAt(i)
        }
    }

    return result
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"