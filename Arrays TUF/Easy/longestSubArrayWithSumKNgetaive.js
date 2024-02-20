// Longest Subarray with sum K | [Postives and Negatives]
// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

// Example 1:
// Input Format: N = 3, k = 5, array[] = {2,3,5}
// Result: 2
// Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

// Example 2:
// Input Format: N = 3, k = 1, array[] = {-1, 1, 1}
// Result: 3
// Explanation: The longest subarray with sum 1 is {-1, 1, 1}. And its length is 3.


//Use two loops to find the longest length
function longestSubArrWithSumK(arr, k){

    let longestLength = 0;

    for(let i = 0 ; i < arr.length ; i++){
        let currLength = 0;
        let sum = 0;
        for(let j = i ; j < arr.length ; j++){
            sum += arr[j];
            if(sum == k ) {
                console.log(j,i)
                currLength = j - i + 1;
                if(currLength > longestLength) longestLength = currLength;
              
            }
        }
    }
    return longestLength;
}


//use hashing to store the prefixSum and if the value is found, fetch the index to calculate length
function longestSubArrWithSumK1(arr,k){
    let map = new Map();
    let maxLength = 0;
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++ ){
         sum += arr[i];
         if(sum == k){
            maxLength = i + 1;
         }
         else if(map.has(sum - k)){
            let idx = map.get(sum - k);
            let currLength = i - idx ;
            if(currLength > maxLength) maxLength = currLength;
         }
         if(!map.has(sum)) map.set(sum,i);
    }
    return maxLength;

}












let arr = [-1, 1, 1,1,-1,0,1,-1], k = 1; // 3

// let arr = [2,3,5] ,  k = 5; // 2

let result = longestSubArrWithSumK1(arr,k);

console.log(result);