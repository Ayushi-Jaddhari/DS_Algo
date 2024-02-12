// Problem Description
// Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

// If the answer does not exist return an array with a single integer "-1".

// First sub-array means the sub-array for which starting index in minimum.
/* Approach using PrefixSum
function findSubArraySum(arr,B){
    let N = arr.length;
    let p1 = 0 , p2 = 1;
    let flag = false;
    while(p1 < N && p2 < N){
        let sum = 0;
        if(p1 == 0){
            sum = arr[p2];
        }
        else{
            sum = arr[p2] - arr[p1-1];
        }
        if(sum === B) {
            console.log('here',sum,arr,p2,p1)
            flag = true;
            break;
        }
        if(sum > B) p1++;
        else p2 ++;
    }
    
    if(flag == true) return [p1,p2];
    return false;
}
function solve(arr, B){
    let N = arr.length;
    let prefixSum = [];
    prefixSum[0] = arr[0];
    for(let i = 1 ; i < N ;i++){
        prefixSum[i] = prefixSum[i-1] + arr[i];
    }
    let result = findSubArraySum(prefixSum,B);
    if(!result) return [-1];
    return arr.slice(result[0],result[1]+1);

} */
function solve(arr, B){
    let N = arr.length;
    let p1 = 0;
    let p2  = 0;
    let sum = arr[p2];
    
    while(p1 <= p2 && p2 < N){
        if(sum == B) return arr.slice(p1,p2+1);
        if(sum < B){
            p2++;
            if(p2 < N) sum += arr[p2];
        }
        else{
            sum -= arr[p1];
            p1 ++;
            if(p1 > p2 && p1 < N-1 ){
               p2 ++;
               sum += arr[p2];
            }
        }
    }
    return [-1];
}
const arr = [1, 2, 3, 4, 5]

let  B = 10;

console.log(solve(arr,B));