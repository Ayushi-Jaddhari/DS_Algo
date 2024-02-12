
// Given a string A denoting an expression. It contains the following operators '+', '-', '*', '/'.

// Check whether A has redundant braces or not.

// NOTE: A will be always a valid expression and will not contain any white spaces.
function solve(A){
    let stack = [];
    let i = 0;
    while( i < A.length){
        console.log('iii', A[i],stack)
        if(A[i] == ')'){
            let isOperator = false;

            while(stack.length && stack[stack.length - 1] != '('){
                let top = stack[stack.length - 1];
                if(['-', '+', '*' ,'/'].includes(top)) {
                    isOperator = true;
                }
                stack.pop();
            }
            stack.pop();
            if(isOperator == false) return 1;
        }
        else{
            stack.push(A[i]);
        }
        i++;
    }
    return 0;
}

console.log(solve('(a+(a+b))'))
function solve2(A){
    let isRedundantBraces = 0;
    let stack = [];
    let n = A.length , i = 0;
    while( i < n){
        if( A[i] == ')'){
            let count = 0;
            let isOperator = false;
            while( stack.length && stack[stack.length-1] != '(' ){
                let top = stack[stack.length-1];
                if(["+","-","*","/"].includes(top)) isOperator = true;
                stack.pop();
                count++;
            }
            stack.pop();
            count++;
            if(count <= 1 || isOperator == false){
                isRedundantBraces = 1;
                break;
            }
        }
        else{
            stack.push(A[i]);
        }
        i++;
    }
    return isRedundantBraces;
}

