function reverseString(string){
    return string.split('').reverse().join('')
    //split separa
    //reverse inverte
    //join junta de novo
}

console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"