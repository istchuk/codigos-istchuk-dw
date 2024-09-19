let c1 = true;
let c2 = true;
let c3 = true;
let c4 = false;
let c5 = false;

console.log("1");
console.log("2");

if (c1 == true) {
    if (c2 == true) {
        if (c4 == true){
            console.log("3"); // caminho 1
        } else {
            console.log("5"); // caminho 2
        }
    } else {
        console.log("7"); // caminho 3
    }
} else {
    if (c3 == false) {
        if (c5 == true) {
            console.log("4"); // caminho 4
        } else {
            console.log("6"); // caminho 5
        }
    } else {
        console.log("8"); // caminho 6
    }
}

console.log("D");
