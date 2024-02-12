// Given an expression string A, examine whether the pairs and the orders of “{“,”}”, ”(“,”)”, ”[“,”]” are correct in A.



function solve(A){
    let mapping = {'}' : '{' , ']' : '[' , ')' : '('};
    let stack = [];
    let i = 0;
    while( i < A.length){

        if( A[i] == '(' || A[i] == '[' || A[i] == '{' ){
            stack.push(A[i]);
        }
        else{
            if(stack.length && stack[stack.length - 1] == mapping[A[i]]){
                stack.pop();
            }
            else{
                return 0;
            }
        }
        i++;
    }
    if(stack.length) return 0;
    return 1;
}

console.log(solve('(){'))




