// Given a sorted array of integers A where every element appears twice except for one element which appears once, find and return this single element that appears only once.

// Elements which are appearing twice are adjacent to each other.

// NOTE: Users are expected to solve this in O(log(N)) time.

function solve(arr){
    let N = arr.length;
    let start = 0 , end = N-1;
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if((mid == 0 || arr[mid] != arr[mid-1]) && (mid == N-1 || arr[mid] != arr[mid+1])) return arr[mid];
        if(mid > 0 && arr[mid] == arr[mid-1]){
            if(mid % 2 == 0) end = mid - 1;
            else start = mid + 1;
        }
        else{
            if(mid % 2 == 0) start = mid + 1;
            else end = mid - 1;
        }
    }
}

let arr =  [1,1,2,2,3]


let result = solve(arr);

console.log(result);