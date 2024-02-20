// 53. Maximum Subarray
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

var maxSubArray1 = function(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;

    for(let i = 0 ; i < nums.length ; i++){
        let sum =0;
        for(let j = i ; j < nums.length ; j++){
            sum += nums[j];
            if(sum > maxSum) maxSum = sum;
        }
    }
    return maxSum;
    
};
//Kadane Algo
var maxSubArray2 = function(nums) {
    let currentSum = 0 , maxSum = nums[0];
    let i = 0;
    while( i < nums.length){
        currentSum = Math.max(nums[i], nums[i] + currentSum);
        maxSum = Math.max(currentSum, maxSum);
        i++;
    }
    return maxSum;
    
};