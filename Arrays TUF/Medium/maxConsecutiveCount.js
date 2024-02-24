// Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


//BruteForce
var longestConsecutive = function(nums) {
    
    let maxConsecutive = 0;

    for(let i = 0 ; i < nums.length ; i++){

        let currConsecutiveCount = 1;
        let value = nums[i] + 1;
        while(linearSearch(nums , value)){
            currConsecutiveCount++;
            value+=1;
        }
        if(currConsecutiveCount > maxConsecutive) maxConsecutive = currConsecutiveCount;
    }
    return maxConsecutive;
    
};
const linearSearch = (nums, target) => {
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == target) return true;
    }
    return false;
}

//Better


var longestConsecutive = function(nums) {
    if(!nums.length) return 0;
    nums.sort((a,b) => a-b);
    console.log(nums)
    let maxCount = 1;
    let lastSmaller = -Infinity;
    let count = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] - 1 == lastSmaller){
           count += 1;
           lastSmaller = nums[i]
        }
      else if(lastSmaller != nums[i]){
         count = 1;
         lastSmaller = nums[i];
      }
      maxCount = Math.max(count,maxCount);
    }
    return maxCount;
};


//Optimised
// Using set for reducing search space and search time
var longestConsecutive = function(nums) {
    let n = nums.length;
    if(n == 0) return n;

    let longest = 1;
    let set = new Set();
    for(let i = 0 ; i < n ; i++){
        set.add(nums[i]);
    }
    for( let value of set){
        if(!set.has(value - 1)){
            let count = 1;
            let x = value;
            while(set.has(x + 1)) {
                x = x + 1;
                count++;
            }
            longest = Math.max(longest,count)
        }
    }    
    return longest;
    
};



