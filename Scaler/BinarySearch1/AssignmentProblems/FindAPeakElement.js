// Problem Description
// Given an array of integers A, find and return the peak element in it.
// An array element is considered a peak if it is not smaller than its neighbors. For corner elements, we need to consider only one neighbor.

// NOTE:

// It is guaranteed that the array contains only a single peak element.
// Users are expected to solve this in O(log(N)) time. The array may contain duplicate elements.

function solve(arr){
    let N = arr.length;
    let start = 0 , end = N-1;
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if((mid == 0 || arr[mid] >= arr[mid-1]) && (mid == N-1 || arr[mid] >= arr[mid+1])) return arr[mid];
        if(mid > 0 && arr[mid] <= arr[mid-1]){
            end = mid - 1;
        }
        else{
            start = mid+1;
        }
    }
}

let arr = [1,1000000000,1000000000]


let result = solve(arr);

console.log(result);