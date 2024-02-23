
// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]
 


// Finding All Perumattion and then returning the next Permutation
var nextPermutation = function(nums) {
    let result = [];
  let map = Array(nums.length).fill(false);
  findPermutations(0,nums,map,[],result);
 let nextIndex = findNextIndex(result, nums);
 console.log(nextIndex)
 nextIndex = nextIndex == result.length - 1 ? 0 : nextIndex + 1;
  return result[nextIndex];
  
};
function findNextIndex(arr, target) {
for (let i = 0; i < arr.length; i++) {
  // Check if all elements in the subarray match the target elements
  if (arr[i].every((value, index) => value === target[index])) {
    return i;
  }
}
}
var findPermutations = function(idx, nums, map, curr, result){
   if(curr.length == nums.length){
       result.push([...curr]);
       return;
   }
   for(let i = 0 ; i < nums.length ; i++){
       if(map[i] == false){
           map[i] = true;
           curr.push(nums[i]);
           findPermutations(i+1,nums,map,curr,result);
           curr.pop();
           map[i] = false;
       }
   }
}


//
var nextPermutation = function(nums) {
    let n = nums.length;
    let indx = n - 2;
    //Find the break-point, i: Break-point means the first index i from the back of the given array where arr[i] becomes smaller than arr[i+1].
    while( indx >= 0 && nums[indx] >= nums[indx + 1] ) indx --;

    if(indx >= 0){
        let j = n - 1;
        //If a break-point exists: Find the smallest number i.e. > arr[i] and in the right half of index i(i.e. from index i+1 to n-1) and swap it with arr[i].
        while(j >=0 && nums[indx] >= nums[j]) j --;
        swap(nums,indx, j);
    }
    reverse(nums,indx + 1, nums.length -1);
};
function swap(nums, i , j){
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
}
function reverse(nums, i , j){
    while( i < j){
        swap(nums, i , j);
        i++, j--;
    }
}


