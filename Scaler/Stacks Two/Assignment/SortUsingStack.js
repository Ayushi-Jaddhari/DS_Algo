// Given a stack of integers A, sort it using another stack.

// Return the array of integers after sorting the stack using another stack.


function solve(A){

    let stack = [];

    while(A.length){
        let topOfA = A.pop();

        while(stack.length && stack[stack.length - 1] > topOfA){
            let topOfB = stack.pop();
            A.push(topOfB);
        }
        stack.push(topOfA);
    }
    return stack;
}


A = [5,6,9,0,0,1,2];

console.log(solve(A));