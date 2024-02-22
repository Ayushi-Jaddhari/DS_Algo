

// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

// Examples
// Example 1:

// Input: arr = [-2,1,-3,4,-1,2,1,-5,4] 

// Output: 6 

// Explanation: [4,-1,2,1] has the largest sum = 6. 

// Examples 2: 

// Input: arr = [1] 

// Output: 1 

// Explanation: Array has only one element and which is giving positive sum of 1. 



function printSubArrayWithMaxSum(arr){

    let start = 0 , end = 0, maxsum = Number.MIN_SAFE_INTEGER;

    for (let i = 0 ; i < arr.length ; i++){
        let sum = 0;
        for(let j = i ; j < arr.length ; j++){
            sum += arr[j];
            if(sum > maxsum){
                start = i;
                end = j;
                maxsum = sum;
            }
        }
    }
    return [start,end];
}
var printSubArrayWithMaxSum2 = function(nums) {
    let currentSum = 0 , maxSum = nums[0] , start = -1, end = -1;
    let i = 0, indx = 0;
    while( i < nums.length){
        if(currentSum == 0) indx = i;
        currentSum += nums[i];
        if(currentSum > maxSum){
            start = indx;
            end = i;
            maxSum = currentSum;
        }
        if(currentSum < 0){
            currentSum = 0;
        }
        i++;
    }
    return [start,end];
    
};



let  arr = [-2,1,-3,4,-1,2,1,5,4] ;

let result = printSubArrayWithMaxSum(arr);
let result2 = printSubArrayWithMaxSum2(arr);
console.log(result);
console.log(result2);