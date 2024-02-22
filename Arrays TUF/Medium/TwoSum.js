// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 


//Brute Force Using Nested for loop [Linear Search]

function twoSum(arr, target) {
    
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[i] + arr[j] == target) return [i,j];
        }
    }
    
};


//Using map
function twoSum1(arr, target) {
    
    
    let map = new Map();

    for(let i = 0 ; i < arr.length ; i++){
        if(map.has(target - arr[i])){
            let idx = map.get(target - arr[i]);
            return [idx , i];
        }
        if(!map.has(arr[i])) map.set(arr[i],i);
    }    
};


//Using array sorting and two pointers

function twoSum3(arr,target){

    arr.sort((a,b) => a - b);

    let left = 0 , right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum == target) {
            return [left , right];
        }
        else if( sum < target) left ++;
        else right --;
    }
}


let nums = [2,7,11,15], target = 9;

let result = twoSum1(arr, target);

console.log(result);
