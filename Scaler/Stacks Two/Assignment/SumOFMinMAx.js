// Given an array of integers A.

// The value of an array is computed as the difference between the maximum element in the array and the minimum element in the array A.

// Calculate and return the sum of values of all possible subarrays of A modulo 109+7.

function solve(A){
    let NSIL = nearestSmallestIndexLeft(A);
    let NSIR = nearestSmallestIndexRight(A);
    let NGIL = nearestGreatestIndexLeft(A);
    let NGIR = nearestGreatestIndexRight(A);
    let ans = 0;
    console.log(NSIL,NSIR,NGIL,NGIR);
    for(let i = 0 ; i < A.length ; i++){
        let leftMin = NSIL[i];
        let rightMin = NSIR[i];
        let leftMax = NGIL[i];
        let rightMax = NGIR[i];
        let possibility = ((rightMax - i) * ( i - leftMax)) - ((rightMin - i) * (i - leftMin)) ;
        let currSum = A[i] * possibility;
        ans += currSum;
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
            ans[i]= N;
        }
        else{
            ans[i] = stack[stack.length-1];
        }
        stack.push(i);
    }
    return ans;
}

function nearestGreatestIndexLeft(A){
    let ans = [-1];
    let stack = [0];

    for(let i = 1; i < A.length ; i++){

        while(stack.length && A[stack[stack.length-1]] < A[i]){
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

function nearestGreatestIndexRight(A){
    let N = A.length;
    let ans = new Array(N);
    ans[N-1] = N;
    let stack = [N-1];

    for(let i = N-2; i >= 0 ; i--){

        while(stack.length && A[stack[stack.length-1]] < A[i]){
            stack.pop();
        }
        if(stack.length == 0){
            ans[i]= N;
        }
        else{
            ans[i] = stack[stack.length-1];
        }
        stack.push(i);
    }
    return ans;
}

A =  [1]

console.log(solve(A))



