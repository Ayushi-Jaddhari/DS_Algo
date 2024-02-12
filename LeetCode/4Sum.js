// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// Solution

// We will have 2 loops for 2 elements of quadruplets. Lets say for 2 loops we will use i and j for the interations. For finding next 2 elements we will use 2 pointer method.
// In 2 pointer method we will have 2 pointers left and right. Initially we will set left pointer as j+1 and right as length-1.

// We will check the sum (nums[i] + nums[j] + nums[left] + nums[right]). If it is equal to target then we will push that quadruplets to result array. We need to increase left and right pointer. Because only changing one pointer will always give different sum (not equal to target)
// If sum is less than target then we need to increase only left pointer(not the right pointer) because we need to increase the sum value to match it with target value. If we decrease right pointer, we will have smaller element in the combination which will not increase overall sum.(Remember the array is sorted)
// If sum is greater than the target then we need to reduce right pointer (as per above logic)

// To avoid duplicate entries, we need to take care whether each element is not repeating itself for same combinations of the other elements. Lets say we have array=[3,3,4,4,4,1,1,5] and target=16

// //first interation 
//  [3,3,4,4,4,1,1,5]  
//   i j l         r
//   //here sum is 15 which is less than 16. we need to increment the left point. 
//   //As next element is also same as current element for left pointer we don't need to consider that combination. 
//   //We need to increment the left pointer until we get different combination. 
  
//   //next interation should be
//  [3,3,4,4,4,1,1,5]  
//   i j       l   r
// This way we need to avoid duplicates for every elements. As the array is sorted all the same elements will be side by side and we can easily avoid using same value for the perticular element.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)      //First sort the array in ascending order
    let len = nums.length;
    let left=0, right=0, sum=0;
    let result = [];
    for(let i=0; i<len-3; i++){ // Because we need to return 4 elements, so if we dont find till last4th thn the answer would obviously liw in last 3 indexes, as array certainly hs 4 indexes with result.

        for(let j=i+1; j<len-2; j++){ // 1st index will be i,2nd index will be j and last 2 indexes will be the part of quadruplets. thats why we can skipp last 2 indexes

            left = j+1;
            right = len-1;
            while(left < right){
                sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum === target){
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    while(nums[left]===nums[left+1]) left++;     //To avoid same values for left pointer
                    while(nums[right]===nums[right-1]) right--;  //To avoid same values for right pointer
                    left++;
                    right--;
                } else if (sum < target){
                    left++;
                } else {
                    right--;
                }
            }
            while(nums[j]===nums[j+1]) j++;
        }
        while(nums[i]===nums[i+1]) i++;
    }
    return result;
};

console.log(fourSum([1,0,-1,0,-2,2],0))