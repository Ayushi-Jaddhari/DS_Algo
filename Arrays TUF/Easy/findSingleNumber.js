// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1



function findSingleNumber1(arr){
    for(let i = 0 ; i < arr.length ; i++){
        let flag = false;
        for(let j = 0 ; j < arr.length ; j++){
            
            if(arr[i] == arr[j] && i != j) {
                flag = true;
                break;
            }
        }
        if(flag == false) return arr[i];
    }
}


function findSingleNumber2(nums){
    let xor = 0;
    for(let i = 0 ; i < nums.length ; i++){
        xor = xor ^ nums[i];
    }
    return xor;
}



function findSingleNumber3(nums){
    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length ; i+=2){
        if( nums[i] != nums[i + 1]) return nums[i];
    }
}



