function capitalizeWords(str){
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza cada palavra
        .join(" "); // Junta as palavras com espaço entre elas
}

console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"