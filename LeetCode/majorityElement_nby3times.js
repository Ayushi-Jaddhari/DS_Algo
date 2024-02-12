// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Input: N = 5, array[] = {1,2,2,3,2}

// Ouput: 2

// Explanation: Here we can see that the Count(1) = 1, Count(2) = 3 and Count(3) = 1.Therefore, the count of 2 is greater than N/3 times. Hence, 2 is the answer.
// Example 2:

// Input:  N = 6, array[] = {11,33,33,11,33,11}

// Output: 11 33

// Explanation: Here we can see that the Count(11) = 3 and Count(33) = 3. Therefore, the count of both 11 and 33 is greater than N/3 times. Hence, 11 and 33 is the answer.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]


var majorityElement = function(nums) {
    let map = new Map();
    let result =[];
    let target =Math.floor(nums.length/3);
    for(let num of nums){
        if(map.has(num)){         
            if(map.get(num)!=="Taken"){
                map.set(num,map.get(num)+1);
                } 
        }else{
            map.set(num,0)
        }
        if(map.get(num)>=target){
            result.push(num)
            map.set(num,"Taken")
        }
        
        }
        return result;
    }


console.log(majorityElement([3,2,2]))