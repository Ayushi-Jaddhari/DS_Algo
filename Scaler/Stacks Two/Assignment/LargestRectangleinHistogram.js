// Given an array of integers A.

// A represents a histogram i.e A[i] denotes the height of the ith histogram's bar. Width of each bar is 1.

// Find the area of the largest rectangle formed by the histogram.

function solve(A){
    let NSIL = nearestSmallestIndexLeft(A);
    let NSIR = nearestSmallestIndexRight(A);
    let ans = Number.MIN_SAFE_INTEGER;

    for(let i = 0 ; i < A.length ; i++){
        let left = NSIL[i];
        let right = NSIR[i];
        let range = right - left - 1;
        console.log(left,right,range);
        let currRectArea = A[i] * range;
        ans = Math.max(ans,currRectArea); 
    }
    return ans;
}

function nearestSmallestIndexLeft(A){
    let ans = [-1];
    let stack = [0];

    for(let i = 1; i < A.length ; i++){

        while(stack.length && A[stack[stack.length-1]] >= A[i]){
            stack.pop();
        }
        if(stack.length == 0){
            ans.push(-1);
        }
        else{
            ans.push(stack[stack.length-1]);
        }
        stack.push(i);
    }
    return ans;
}


function nearestSmallestIndexRight(A){
    let N = A.length;
    let ans = new Array(N);
    ans[N-1] = N;
    let stack = [N-1];

    for(let i = N-2; i >= 0 ; i--){

        while(stack.length && A[stack[stack.length-1]] >= A[i]){
            stack.pop();
        }
        if(stack.length == 0){
            console.log('here for i' , i)
            ans[i]= N;
        }
        else{
            ans[i] = stack[stack.length-1];
        }
        stack.push(i);
    }
    return ans;
}


A = [2, 1, 5, 6, 2, 3]

console.log(solve(A))