// Problem Description
// You are given a sorted array A of size N and a target value B.
// Your task is to find the index (0-based indexing) of the target value in the array.

// If the target value is present, return its index.
// If the target value is not found, return the index of least element greater than equal to B.
// Your solution should have a time complexity of O(log(N)).


function solve(arr,target){
        let ans = 0;
        let N = arr.length;
        let start = 0 , end = N-1;
        while(start <= end){
            console.log(start,end,ans   );
            let mid = Math.floor((start + end)/2);
            if(arr[mid] == target) return mid;
            if(arr[mid] > target){
                ans = mid;
                end = mid - 1;
            }
            else{
                start = mid + 1;
            }
        }
        return ans;
}

let arr = [1, 3, 5, 6];
let target = 7

let result = solve(arr,target);

console.log(result);