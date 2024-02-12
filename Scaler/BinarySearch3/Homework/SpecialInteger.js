/* Given an array of integers A and an integer B, find and return the maximum value K such that there is no subarray in A of size K with the sum of elements greater than B. */


function check(arr,k,B){
    let N = arr.length;
    let sum = 0;
    for(let i = 0 ; i < k ; i++){
        sum += arr[i];
    }
    if(sum > B) return false;
    let ind = 0;
    for(let i = k ; i < N ; i++){
        sum -= arr[ind];
        sum += arr[i];
        ind ++;
        if(sum > B) return false;
    }
    return true;
}
// 1 [2 3 4] 5 // 1 [3 6 10] 15 // 
function solve(arr, B){
    let N = arr.length;
    let start = 0;
    let end = N;
    let ans = 0;
    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(check(arr,mid,B)){
            ans = mid;
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return ans;
}


let arr  = [1, 2, 3, 4, 5]; 
let B = 10;

let result =  solve(arr , B);

console.log(result);