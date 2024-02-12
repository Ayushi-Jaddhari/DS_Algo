// Given an array of integers A and an integer B, we need to reverse the order of the first B elements of the array, 
// leaving the other elements in the same relative order. 

// NOTE: You are required to the first insert elements into an auxiliary queue then perform Reversal of first B elements.


function solve(A, B){
    let N = A.length;
    let ans = [];
    let tempStack = [];

    for(i = N -1 ; i >= B; i--){
        tempStack.push(A[i]);
    }
    for(let i = B - 1 ; i >= 0 ; i--){
        ans.push(A[i]);
    }
    while(tempStack.length){
        ans.push(tempStack.pop())
    }
    return ans;
}

let A = [1,2,3,4,5] , B = 3;
console.log(solve(A,B));