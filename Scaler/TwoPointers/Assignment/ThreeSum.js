/* Given an array A of N integers, find three integers in A such that the sum is closest to a given number B. Return the sum of those three integers.

Assume that there will only be one solution. */

function solve(arr , B){
    arr = arr.sort((a,b) => a - b);
    let N = arr.length;
    let ans = Infinity;

    for(let i = 0; i < N-2 ; i++){
        let p1 = i+1;
        let p2 = N-1;
       
        while( p1 < p2){
            let sum = arr[i] + arr[p1] + arr[p2];
            if(Math.abs(B - sum) < Math.abs(B - ans)) ans = sum;
            if(sum < B) p1++;
            else p2 --;
        }
    }
    return ans;

}


let arr = [-1, 2, 1, -4];
let B = 1;

console.log(solve(arr,B));