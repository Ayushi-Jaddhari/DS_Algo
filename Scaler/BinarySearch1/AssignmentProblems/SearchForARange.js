// Given a sorted array of integers A (0-indexed) of size N, find the left most and the right most index of a given integer B in the array A.

// Return an array of size 2, such that 
//           First element = Left most index of B in A
//           Second element = Right most index of B in A.
// If B is not found in A, return [-1, -1].

// Note : Your algorithm's runtime complexity must be in the order of O(log n).

function solve(arr,target){
    let N = arr.length;
    let start = 0 ;
    let end = N-1;
    let leftIndex = -1;
    while( start <= end){
        let mid = Math.floor((start+end) / 2);
        if(arr[mid] == target) leftIndex = mid;
        if(arr[mid] < target){
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    if(leftIndex == -1) return [-1 , -1];
    let rightIndex = -1;
    start = 0 ;
    end = N-1;
    while( start <= end){
        let mid = Math.floor((start+end) / 2);
        if(arr[mid] == target) rightIndex = mid;
        if(arr[mid] <= target){
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return [leftIndex , rightIndex];

}


let arr = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ];
let target =  10 ;

let result = solve(arr, target);
console.log(result)