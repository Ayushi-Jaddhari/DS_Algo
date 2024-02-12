// Longest Consecutive Sequence in an Array
// Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

// Examples:

// Example 1:

// Input: [100, 200, 1, 3, 2, 4]

// Output: 4

// Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

// Input: [3, 8, 5, 7, 6]

// Output: 4

// Explanation: The longest consecutive subsequence is 5, 6, 7, and 8.


var longestConsecutive = function(nums) {
    if(nums.length<1) return 0
    nums.sort((a,b)=>a-b);
    let count=1,result=0;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i+1]===nums[i]){
            continue;
        }
        else if(nums[i+1]===nums[i]+1 ) {
            count ++;
        }else{
            result = Math.max(count,result);
            count =1;
        }
    }
    return Math.max(result,count);
};
var longestConsecutive1 = function(nums) {
let hashSet = new Set(nums);
let longestStreak =0
for (let  num of nums) {
    if (!hashSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;

        while (hashSet.has(currentNum + 1)) {
            currentNum += 1;
            currentStreak += 1;
        }

        longestStreak = Math.max(longestStreak, currentStreak);
    }
}

return longestStreak;
}

console.log(longestConsecutive([1,1,2,3,4,45,4,56,6,6,7,4,5]));
console.log(longestConsecutive1([1,1,2,3,4,45,4,56,6,6,7,4,5]));