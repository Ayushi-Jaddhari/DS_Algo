// Given an array A, find the next greater element G[i] for every element A[i] in the array.
// The next greater element for an element A[i] is the first greater element on the right side of A[i] in the array, A.

// More formally:

// G[i] for an element A[i] = an element A[j] such that 
//     j is minimum possible AND 
//     j > i AND
//     A[j] > A[i]
// Elements for which no greater element exists, consider the next greater element as -1.

function solve(A){
    let N = A.length;
    let ans = Array(N);
    ans[N-1] = -1;
    let stack = [A[N-1]];
    for(let i = N-2 ; i >= 0 ; i--){
        
        while(stack.length && stack[stack.length - 1] <= A[i]){
            stack.pop();
        }
        if(stack.length == 0) ans[i] = -1;
        else{
            ans[i] = stack[stack.length - 1];
        }
        stack.push(A[i]);
    }
    return ans;
    
}


A = [39,27,11,4,24,32,32,1];

console.log(solve(A));