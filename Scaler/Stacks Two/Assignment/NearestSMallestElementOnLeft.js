// Problem Description
// Given an array A, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index 
// smaller than i.

// More formally,

// G[i] for an element A[i] = an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Elements for which no smaller element exist, consider the next smaller element as -1.




function solve(A){
    let ans = [-1];
    let stack = [A[0]];

    for(let i = 1; i < A.length ; i++){
        while(stack.length && stack[stack.length - 1] >= A[i]){
            stack.pop();
        }
        if(stack.length == 0) {
            ans.push(-1);
        }
        else{
            ans.push(stack[stack.length - 1 ]);
        }
    stack.push(A[i]);
    }
    return ans;
}

A = [4, 5, 2, 10, 8]
console.log(solve(A));