// Given a 2D binary matrix of integers A containing 0's and 1's of size N x M.

// Find the largest rectangle containing only 1's and return its area.

// Note: Rows are numbered from top to bottom and columns are numbered from left to right.


// Input Format

// The only argument given is the integer matrix A.
// Output Format

// Return the area of the largest rectangle containing only 1's.
// Constraints

// 1 <= N, M <= 1000
// 0 <= A[i] <= 1
// For Example

// Input 1:
//     A = [   [0, 0, 1]
//             [0, 1, 1]
//             [1, 1, 1]   ]
// Output 1:
//     4

// Input 2:
//     A = [   [0, 1, 0, 1]
//             [1, 0, 1, 0]    ]
// Output 2:
//     1



function solve(A){
    let N = A.length;
    let M = A[0].length;
    let arr = [];
    for(let i = 0 ; i < M ;i++){
        arr.push(A[0][i]);
    }
    let max = largestRectangle(arr);
    for(let i = 1 ; i < N ; i++){
        for(let j = 0 ; j < M ; j++)
        {
            if(A[i][j] == 0) arr[j]  = 0;
            else arr[j] = arr[j] + A[i][j];
        }
        let currArea = largestRectangle(arr);
        max = Math.max(max , currArea);
    }
    return max;
}
function largestRectangle(A){
    let NSIL = nearestSmallestIndexLeft(A);
    let NSIR = nearestSmallestIndexRight(A);
    let ans = Number.MIN_SAFE_INTEGER;

    for(let i = 0 ; i < A.length ; i++){
        let left = NSIL[i];
        let right = NSIR[i];
        let range = right - left - 1;
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
            ans[i]= N;
        }
        else{
            ans[i] = stack[stack.length-1];
        }
        stack.push(i);
    }
    return ans;
}

let A = [   [0, 1, 0, 1],[1, 0, 1, 0]    ]

console.log(solve(A));