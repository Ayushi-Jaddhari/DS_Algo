// Given a number A, find if it is COLORFUL number or not.

// If number A is a COLORFUL number return 1 else, return 0.

// What is a COLORFUL Number:

// A number can be broken into different consecutive sequence of digits. 
// The number 3245 can be broken into sequences like 3, 2, 4, 5, 32, 24, 45, 324, 245 and 3245. 
// This number is a COLORFUL number, since the product of every consecutive sequence of digits is different


function solve(num){
    let numStr = num.toString();

    let set = new Set();

    for(let i = 0 ; i < numStr.length ; i++){
        let product = 1;
        for(let j = i ; j < numStr.length ; j++){
            product *= numStr[j];
            if(set.has(product)) return 0;
            else set.add(product); 
        }
    }
    return 1;


}




let num = 58273;
console.log(solve(num));