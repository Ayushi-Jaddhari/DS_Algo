// An arithmetic expression is given by a string array A of size N. Evaluate the value of an arithmetic expression in Reverse Polish 
// Notation.

// Valid operators are +, -, *, /. Each string may be an integer or an operator.

// Note: Reverse Polish Notation is equivalent to Postfix Expression, where operators are written after their operands.



function solve(A){

    let stack = [];

    let i = 0;
    while( i < A.length){

        if(A[i] == '+' || A[i] == '-' || A[i] == '*' || A[i] == '/'){
            let b = stack.pop();
            let a = stack.pop();
            if(A[i] == '+') stack.push(a + b);
            if(A[i] == '-') stack.push(a - b);
            if(A[i] == '*') stack.push(a * b);
            if(A[i] == '/') stack.push(Math.floor(a / b));         
        }
        else{
            stack.push(Number(A[i]));
        }
        i++;
    }
    return stack.pop();
}

console.log(solve(["4", "13", "5", "/", "+"]))