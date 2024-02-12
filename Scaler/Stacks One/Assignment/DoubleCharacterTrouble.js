// You have a string, denoted as A.

// To transform the string, you should perform the following operation repeatedly:
// Identify the first occurrence of consecutive identical pairs of characters within the string.
// Remove this pair of identical characters from the string.
// Repeat steps 1 and 2 until there are no more consecutive identical pairs of characters.
// The final result will be the transformed string.


function solve(A){

    let stack = [];

    let i = 0;

    while( i < A.length){
        if(stack.length && stack[stack.length - 1] == A[i]) stack.pop();
        else stack.push(A[i]);
        i++;
    }
    return stack.join('');
}

console.log(solve("abccbc"))