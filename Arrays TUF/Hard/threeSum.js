
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 















var threeSum = function(nums) {
    let ans = [];
    let set = new Set();
    for(let i = 0 ; i < nums.length - 2 ; i++){
        for(let j = i + 1; j < nums.length - 1 ; j++){
            for(let k = j+1 ; k < nums.length ; k++){
                if(nums[i] + nums[j] + nums[k] == 0){
                    let val = [nums[i] , nums[j] , nums[k]];
                    let valString = val.sort((a,b)=>a-b).join('');
                    if(!set.has(valString)){
                        ans.push(val);
                        set.add(valString);
                    }
                }
            }
        }
    }
  
    return ans;
    
};

var threeSum = function(arr) {
let n = arr.length
let ans = []

// check all possible triplets:
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                let temp = [arr[i], arr[j], arr[k]];
                temp.sort((a, b) => a - b);
                ans.push(temp);
            }
        }
    }
}

//store the set in the answer:
let set  = new Set(ans.map(JSON.stringify));
ans = Array.from(set).map(JSON.parse);
return ans;

};


//Best soln

var threeSum = function(nums) {

    let ans = [];
    nums.sort((a,b) => a-b);
    let n = nums.length;
    for(let i = 0; i < n - 2; i++){
        if( i != 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1;
        k = n - 1;
        while( j < k){
            let sum = (nums[i]+ nums[j] + nums[k]);
            if(sum < 0){
                j++;
            }
            else if( sum > 0){
                k--;
            }
            else{
                let temp = [nums[i],nums[j],nums[k]];
                ans.push(temp);
                j++;
                k--;
                while( j < k && nums[ j] == nums[j - 1]) j++;
                while( j < k && nums[k] == nums[k+1]) k--;
            }
        }
    }
    return ans;
    
};





