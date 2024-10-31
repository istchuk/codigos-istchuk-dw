function trimSpaces(str){
    return str
        .split(" ")
        .filter(word => word.trim() !== "")
        .join(" ")
}

console.log(trimSpaces("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante  ")); // Deve exibir: "Programação é interessante"
