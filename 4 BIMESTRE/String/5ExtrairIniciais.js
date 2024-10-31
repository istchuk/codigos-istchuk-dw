function getInitials(name){
    const words = name.split(" ")
    let initials = ""

    words.forEach(word => {
        initials += word.charAt(0).toUpperCase()
    })

    return initials
}

console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"