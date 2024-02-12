// Given an integer A. Compute and return the square root of A.
// If A is not a perfect square, return floor(sqrt(A)).

// The value of A can cross the range of Integer.

// NOTE: 
//    Do not use the sqrt function from the standard library. 
//    Users are expected to solve this in O(log(A)) time.
function solve(A){
    let start = 1 , end = A;
    let ans = 0;
    while(start <= end){
        let mid = Math.floor(( start + end )/2);
        if(mid*mid <= A){
            ans = mid;
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return ans;
}

let A = 50;

let result = solve(A);

console.log(result);