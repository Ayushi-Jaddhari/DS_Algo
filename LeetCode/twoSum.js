// Two Sum : Check if a pair with given sum exists in Array
// Problem Statement: Given an array of integers nums[] and an integer target, return indices of the two numbers such that their sum is equal to the target.

// Note: Assume that there is exactly one solution, and you are not allowed to use the same element twice. Example: If target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

// Example 1:

// Input: nums = [2,7,11,15], target = 9

// Output: [0,1]

// Explanation: Because nums[0] + nums[1] == 9, which is the required target, we return indexes [0,1]. (0-based indexing)
// Example 2:

// Input Format: nums = [3,2,4,6], target = 6

// Output: [1,2]

// Explanation: Because nums[1] + nums[2] == 6, which is the required target, we return indexes [1,2].


//Basic brute force solution
// var twoSum = function(nums, target) {
//  for(let i=0;i<nums.length;i++){
//   for(let j=i+1;j<nums.length;j++){
//       if(nums[i]+nums[j]===target){
//           return [i,j]
//       }
//   }
//  }
// }
// Using hashmap

var twoSum = function(nums,target){
let ans =[];
let map = new Map();
for(let i=0;i<nums.length;i++){
    let diff = target - nums[i];
    if(map.has(diff)){
        ans[0] = map.get(diff);
        ans[1] =i;
      
        break;
    }
    else{
        map.set(nums[i],i)
    }
}
return ans;

}


console.log(twoSum([3,2,4,6],6))