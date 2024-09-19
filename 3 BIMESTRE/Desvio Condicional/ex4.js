let c1 = true;
let c2 = true;
let c3 = true;
let c4 = false;
let c5 = false;

console.log("1");
console.log("2");

let caseNum = 0;

if (c1 == true) {
    caseNum += 1;
    if (c2 == true) {
        caseNum += 2;
        if (c4 == true) {
            caseNum += 4; // soma 7
        } else {
            caseNum += 3; // soma 6
        }
    } else {
        caseNum += 1; // vai somar 5
    }
} else {
    caseNum += 10; // 10
    if (c3 == false) {
        caseNum += 1; // 11
        if (c5 == true) {
            caseNum += 4; // 15
        } else {
            caseNum += 3; // 14
        }
    } else {
        caseNum += 2; // 12
    }
}

switch (caseNum) {
    case 7:
        console.log("3"); 
        break;
    case 6:
        console.log("5"); 
        break;
    case 5:
        console.log("7"); 
        break;
    case 15:
        console.log("4"); 
        break;
    case 14:
        console.log("6"); 
        break;
    case 12:
        console.log("8"); 
        break;
}

console.log("D");
