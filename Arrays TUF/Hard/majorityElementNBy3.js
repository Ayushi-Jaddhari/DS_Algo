// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]





//Brute Force
var majorityElement = function(nums) {

    let n = nums.length;
    console.log(n/3)
    let ans = [];
    for(let i = 0 ; i < n ; i++){
        let count = 1;
        for(let j= i + 1 ; j < n ; j++){
            if(nums[i] == nums[j]) count++;
        }
        if(count > n/3) {
            console.log(ans.indexOf(nums[i]))
            if(ans.indexOf(nums[i]) == -1) ans.push(nums[i]);
        }
    }
    return ans;
    
};
//Better Brute Force

var majorityElement = function(nums) {

    let n = nums.length;
    let ans = [];
    for(let i = 0 ; i < n ; i++){
       if(ans.length == 0 || ans[0] != nums[i]){
           let count = 1;
           for(let j = i + 1 ; j < n ; j++){
               if(nums[i] == nums[j]) count++;
           }
           if(count > n/3) ans.push(nums[i]);
       }
       if(ans.length == 2) return ans;
    }
    return ans;
    
};


//Better
var majorityElement = function(nums) {

    let n = nums.length;
    let map = new Map();
    let set = new Set();
    for(let i = 0 ; i < n ; i++){
        
        if(map.has(nums[i])){
           map.set(nums[i],map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i],1);
        }
        let val = map.get(nums[i]);
        if(val > n/3) set.add(nums[i]);
    }

    return [...set];
    
};

var majorityElement = function(nums) {

    let n = nums.length;
    let map = new Map();
    let ans = [];
    for(let i = 0 ; i < n ; i++){
        
        if(map.has(nums[i])){
           map.set(nums[i],map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i],1);
        }
        let val = map.get(nums[i]);
        if(val > n/3 && (ans.length == 0 || ans[0] != nums[i])) ans.push(nums[i]);
        if(ans.length == 2) return ans;
    }

   return ans;
}

//optimal approach
var majorityElement = function(nums) {

    let n = nums.length;
    let ele1 = -Infinity, ele2 = -Infinity , count1 = 0 , count2 = 0;
    for(let i = 0 ; i < n ; i++){
        if(count1 == 0 && ele2 != nums[i] ){
            ele1 = nums[i];
            count1++
        }
         else if(count2 == 0 && ele1 != nums[i]){
            ele2 = nums[i];
            count2++;
        }
        else if(ele1 == nums[i]){
            count1++;
        }
        else if(nums[i] == ele2){
            count2 ++;
        }
        else{
            count2--;
            count1--;
        }
    }

    count1 = 0 , count2 =0;
    for(let i = 0 ; i < n ; i++){
        if(ele1 == nums[i]) count1++;
        if(ele2 == nums[i]) count2++;
    }
    let ans = []
    if(count1 > n/3) ans.push(ele1);
    if(count2 > n/3) ans.push(ele2);
    return ans;
};