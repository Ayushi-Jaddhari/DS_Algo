// Given an array A of non-negative integers of size N. Find the minimum sub-array Al, Al+1 ,..., Ar such that if we sort(in ascending order) that sub-array, then the whole array should get sorted. If A is already sorted, output -1.

// Note :
// Follow 0-based indexing, while returning the sub-array's starting and ending indexes.

function solve(arr) {
    let N = arr.length;
    let i = 0 , j = N - 1;
    while( i < N-1 && arr[i] <= arr[i+1]){
        i++;
    }
    console.log(i,arr[i]);
    while( j > 0 && arr[j] >= arr[j-1]){
        j--;
    }
    console.log(j,arr[j]);
    if(i == N-1 && j == 0) return [-1];
    let maxValueInUnsorted = arr[i+1];
    let minValueInUnsorted = arr[i+1];
    for(let x = i ; x <= j ; x++){
        maxValueInUnsorted = Math.max(arr[x], maxValueInUnsorted);
        minValueInUnsorted = Math.min(arr[x],minValueInUnsorted);
    }
    let leftIndex = 0 , rightIndex = N-1;
    while(leftIndex < i+1 && arr[leftIndex] <= minValueInUnsorted){
        leftIndex++;
    } 
    while(rightIndex > j-1 && arr[rightIndex] >= maxValueInUnsorted){
        rightIndex--;
    }
    return [leftIndex,rightIndex];
  }
  
  let arr = [1,1]
  let result = solve(arr);
  console.log(result);
  