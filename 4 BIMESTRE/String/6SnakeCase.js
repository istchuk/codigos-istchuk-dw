function toSnakeCase(text){
    text = text.toLowerCase()
    return text.replace(/ /g, '_')
}

console.log(toSnakeCase("Hello World"))
console.log(toSnakeCase("JavaScript is fun")) 
