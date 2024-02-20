// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

//Brutr Force to check maxCount and return maxCount element
var majorityElement1 = function(nums) {
    let maxPossible = 0;
    let majorElement = -1
    for(let i = 0 ; i < nums.length; i++){
        let count = 0;
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[j] == nums[i]) count ++;
        }
        
        if(count > maxPossible) {
            majorElement = nums[i];
            maxPossible = count;
        }
    }
    return majorElement;
    
};

//Brute Force by taking advantage that answer element will appear more than n/2 time
var majorityElement2 = function(nums) {
    for(let i = 0 ; i < nums.length; i++){
        let count = 0;
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[j] == nums[i]) count ++;
        }
        
        if(count > Math.floor(nums.length/2)) return nums[i];
    }
};

var majorityElement3 = function(nums) {
    let map = new Map();

    for(let i = 0 ; i < nums.length ; i++){
        if(map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
        else map.set(nums[i],1);
    }
    for(let i = 0 ; i < nums.length ; i++){
        let count = map.get(nums[i]);
        if(count > Math.floor(nums.length/2)) return nums[i];
    }
    
};
//Moore’s Voting Algorithm:
var majorityElement4 = function(nums) {
    let count = 1, majorElement = nums[0];
     let i = 1;
    while( i < nums.length){
        if( nums[i] == majorElement) count++;
        else{
            count --;
        }
         if(count == 0) {
             majorElement = nums[i];
             count ++;
         }
        i++;
    }
    return majorElement;
     
 };
 
