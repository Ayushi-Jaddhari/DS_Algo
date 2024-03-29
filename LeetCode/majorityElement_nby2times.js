// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

// Example 1:

// Input Format: N = 3, nums[] = {3,2,3}

// Result: 3

// Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

// Example 2:

// Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}

// Result: 2

// Explanation: After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

// Example 3:

// Input Format:  N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}

// Result: 4


// var majorityElement = function(nums) {
//   let map = new Map();
//   let target = Math.floor(nums.length/2);
//   for (let i=0;i<nums.length;i++){
//       if(map.has(nums[i])){
//           map.set(nums[i],map.get(nums[i])+
//           1);
//             if(map.get(nums[i])>target){
//                 return nums[i]
//             }
//       }else{
//           map.set(nums[i],1);
//       }
//   }
// };
var majorityElement = function(nums){
    let count = 0;
    let candidate = 0;

    for (let num of nums) {
        if (count == 0) {
            candidate = num;
        }
        if(num==candidate) count += 1; 
        else count -= 1; 
    }

    return candidate;
}




console.log(majorityElement([4,4,2,2,3,3]))