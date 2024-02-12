// Problem Description
// Given an array A. Sort this array using Count Sort Algorithm and return the sorted array.
function solve(arr){
    let N = arr.length;
    let max = 0;
    for(let i = 0 ; i < N ; i++){
        max = Math.max(max,arr[i])
    }
    console.log(max);
    let freq = Array(max + 1).fill(0);
    for(let i = 0 ; i < N ; i++){
        freq[arr[i]] ++;
    }
    console.log(freq)
    let result = [];
    for(let i = 1 ; i <= max ; i++){
        let frequency = freq[i];
        for(let j = frequency ; j > 0 ; j-- ){
            result.push(i);
        }
    }
    return result;
}

let arr = [10,9,8];

let result = solve(arr);
console.log(result);