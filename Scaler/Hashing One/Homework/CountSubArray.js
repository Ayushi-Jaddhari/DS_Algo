/* Misha likes finding all Subarrays of an Array. Now she gives you an array A of N elements and told you to find the number of subarrays of A, that have unique elements.

Since the number of subarrays could be large, return value % 109 +7. */

function solve(arr){
    let set = new Set();
    let ans = 0;
    let N = arr.length;
    let l = 0;
    for(let r = 0; r < N; r++) {
        // check if A[r] is already there in the present window
        while(set.has(arr[r])) {
            set.delete(arr[l]);
            l++;
        }
        // add the subarrays ending at position r
        ans += r - l + 1;
        set.add(arr[r]);
    }
    return (ans % (1e9 + 7));


}

let arr = [1,1,2];
console.log(solve(arr));

