// Problem Description
// Given string A denoting an infix expression. Convert the infix expression into a postfix expression.

// String A consists of ^, /, *, +, -, (, ) and lowercase English alphabets where lowercase English alphabets are operands and ^, /, *, +, - are operators.

// Find and return the postfix expression of A.

// NOTE:

// ^ has the highest precedence.
// / and * have equal precedence but greater than + and -.
// + and - have equal precedence and lowest precedence among given operators.

function solve(A){
    let precedence = {'^' : 1 ,'*' : 2 , '/' : 2 , '+' : 3 , '-' : 3};
    let output = '';
    let stack = [];
    for(let i = 0 ; i < A.length; i++){
        if(A[i].charCodeAt(0) >=97 && A[i].charCodeAt(0) <= 122) output += A[i];
        else if(A[i] == '(') stack.push(A[i]);
        else if(A[i] == ')'){
            while(stack.length && stack[stack.length - 1] != '('){
                output += stack[stack.length - 1];
                stack.pop();
            }
            stack.pop();
        }
        else{
            let top = stack[stack.length - 1];
            if(stack.length == 0 && top == '(') stack.push(A[i]);
            else{
                while(stack.length && map[stack[stack.length - 1 ]] <=map[A[i]]){
                    output += stack[stack.length - 1];
                    stack.pop();
                }
                stack.push(A[i])
            }
        }
    }
}
function solve(A){
    let map = { '^': 0, '*' : 1 , '/' : 1 , '+' : 2 , '-' : 2};
    let output = '';
    let stack = []
    for( i = 0 ; i < A.length ; i++){
        console.log(A[i],stack)
        if(A[i].charCodeAt(0) >=97 && A[i].charCodeAt(0) <= 122) output +=A[i];
        else if(A[i] == '(') stack.push(A[i]);
        else if(A[i] == ')') {
            while(stack[stack.length - 1] != '('){
                output += stack[stack.length - 1];
                stack.pop();
            }
            stack.pop();
        }
        else{
            let top = stack[stack.length - 1];
            if( stack.length == 0 || top == '(') stack.push(A[i]);
            else{
                console.log('here',stack)
                while(stack.length  && stack[stack.length - 1] !== '(' && map[stack[stack.length - 1]] <= map[A[i]]){
                    output += stack[stack.length - 1];
                    stack.pop();
                }
                stack.push(A[i])
            }
            
        }
    }
    while(stack.length){
        output += stack[stack.length - 1];
        stack.pop();
    }
    return output;
}
// A = 'q+(c*t)*o+(g*g)+q*(i-a)*p-(i*l)'

//qct*o*+gg*+qia-*p*+il*-


// Example Output
// Output 1:

//  "xy^az*/b+"
// Output 2:

//  "abcd^e-fgh*+^*+i-"
A = "a+b*(c^d-e)^(f+g*h)-i"

// A = "x^y/(a*z)+b"
console.log(solve(A));