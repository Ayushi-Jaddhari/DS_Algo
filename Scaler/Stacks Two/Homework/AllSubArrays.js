


function solve(A){
    let leftMax = nexGreaterLeft(A);
    let rightMax = nexGreaterRight(A);
    let secondLeftMax = secondGreaterLeft(A);
    let secondRightMax = secondGreaterRight(A);
    let ans = 0;
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

function nexGreaterLeft(A){
    let N = A.length;
    let ans = Array(N);
    ans[0] = -1;
    let stack = [A[0]];
    for(let i = 1; i < N ; i++){
        
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
function secondGreaterLeft(A){
    let N = A.length;
    let ans = Array(N);
    ans[0] = -1;
    let stack = [A[0]];
    for(let i = 1; i < N ; i++){
        
        while(stack.length && stack[stack.length - 1] <= A[i]){
            stack.pop();
        }
        if(stack.length <= 1) ans[i] = -1;
        else{
            ans[i] = stack[stack.length - 2];
        }
        stack.push(A[i]);
    }
    return ans;
    
}
function nexGreaterRight(A){
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
function secondGreaterRight(A){
    let N = A.length;
    let ans = Array(N);
    ans[N-1] = -1;
    let stack = [A[N-1]];
    for(let i = N-2 ; i >= 0 ; i--){
        
        while(stack.length && stack[stack.length - 1] <= A[i]){
            stack.pop();
        }
        if(stack.length <= 1) ans[i] = -1;
        else{
            ans[i] = stack[stack.length - 2];
        }
        stack.push(A[i]);
    }
    return ans;
    
}
