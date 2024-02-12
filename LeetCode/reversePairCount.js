// Count Reverse Pairs
// Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].

// Examples:

// Example 1:

// Input: N = 5, array[] = {1,3,2,3,1)

// Output: 2 

// Explanation: The pairs are (3, 1) and (3, 1) as from both the pairs the condition arr[i] > 2*arr[j] is satisfied.

// Example 2:

// Input: N = 4, array[] = {3,2,1,4}

// Output: 1

// Explaination: There is only 1 pair  ( 3 , 1 ) that satisfy the condition arr[i] > 2*arr[j]

// let count = function(i,j,nums,count){
//     if(i>=nums.length&&j>=nums.length){
//         return;
//     }
//     if(i<j && nums[i]>2*nums[j]) return count++ 

//     count(i+1,)
// }


// var reversePairs = function(nums) {
//     let count =0;
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//                 if(i<j && nums[i]>2*nums[j]) count++
//         }
//     }
//     return count
// };


var reversePairs = function(nums) {
    return mergeSort(nums, 0, nums.length-1)
};

function mergeSort(nums, low, high) {
    if(low >= high) return 0
    let mid = Math.floor((low + high) / 2);
    let inv = mergeSort(nums, low, mid);
    inv += mergeSort(nums, mid+1, high)
    inv += merge(nums, low, mid, high);
    return inv
}
function merge(nums, low, mid, high) {
    let count = 0
    let j = mid+1;
    for(let i=low; i<=mid; i++) {
        while(j<=high && nums[i] > 2*nums[j]) j++;
        count += (j - (mid+1));
    }

    let temp = []
    let left = low, right = mid+1

    while(left <= mid && right <= high) {
        if(nums[left] <= nums[right]) temp.push(nums[left++])
        else temp.push(nums[right++])
    }
    
    while(left <= mid) temp.push(nums[left++])

    while(right <= high) temp.push(nums[right++])

    for(let i=low; i<=high; i++) nums[i] = temp[i - low]

    return count;
}


console.log(reversePairs([1,3,2,3,1]))


