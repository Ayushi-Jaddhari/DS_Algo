// Given a sorted array of integers A of size N and an integer B, 
// where array A is rotated at some pivot unknown beforehand.

// For example, the array [0, 1, 2, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2].

// Your task is to search for the target value B in the array. If found, return its index; otherwise, return -1.

// You can assume that no duplicates exist in the array.

// NOTE: You are expected to solve this problem with a time complexity of O(log(N))

function solve(arr){
        let N = arr.length;
        let start = 0 , end = N - 1;
        while(start <= end){
            let mid = Math.floor(( start + end )/2);
            if(arr[mid] == target) return mid;
            if(arr[mid] > arr[start]){ // It indicates we are in left half(increasing on left)
                if(arr[start] <= target && arr[mid] >=target) { // Checking that our target lies bw start and mid 
                    end = mid - 1;
                }
                else{
                    start = mid + 1;
                }
            }
            else{ // Indicates we are in right half(increasing on right)
                if(arr[mid] <= target && arr[end] >= target){ // Checking our target lies bw mid and end
                    start = mid + 1;
                }
                else{
                    end = mid - 1;
                }
            }
        }
        return -1;
}

let arr = [4, 5, 6, 7, 0, 1, 2, 3]
let target = 4 

let result = solve(arr,target);

console.log(result);