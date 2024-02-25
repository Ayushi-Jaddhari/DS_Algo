// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2
 





var subarraySum = function(nums, k) {
    let count = 0;

    for(let i = 0 ; i < nums.length ; i++){
        let sum = 0;
        for(let j = i ; j < nums.length ; j++){
            sum += nums[j];
            if(sum == k) count++;
            
        }
    }
    return count;
};


//Using hashing and prefixSum

var subarraySum = function(nums, k) {
    let count = 0, prefixSum = 0;
    let map = new Map();
    map.set(0,1);

    for(let i = 0 ; i < nums.length ; i++){
         prefixSum += nums[i];

         let diff = prefixSum - k;
         if(map.has(diff)){
            count += map.get(diff);
         }

         //set prefixSum in map
        if(map.has(prefixSum)){
            map.set(prefixSum, map.get(prefixSum)+ 1);
        }
        else{
             map.set(prefixSum,1);
        }
    }
    return count;
};