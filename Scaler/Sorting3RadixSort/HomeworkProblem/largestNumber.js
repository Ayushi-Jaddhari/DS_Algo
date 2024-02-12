// Problem Description
// Given an array A of non-negative integers, arrange them such that they form the largest number.

// Note: The result may be very large, so you need to return a string instead of an integer.

function solve(arr){

    function customCompare (a,b){
        let numberAsAB = a + '' + b;
        let numberAsBA = b + '' + a;
        return numberAsBA - numberAsAB
    }
    arr.sort(customCompare);
    let largestNumberPossible = '';
    for(let i = 0 ; i < arr.length ; i++){
        largestNumberPossible += arr[i];
    }
    if(largestNumberPossible == 0) return 0;
    return largestNumberPossible;
}

let arr = [9,5,43,42,45,52];

let result = solve(arr);

console.log(result);