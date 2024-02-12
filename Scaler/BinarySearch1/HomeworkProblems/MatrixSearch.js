// Given a matrix of integers A of size N x M and an integer B. Write an efficient algorithm that searches for integer B in matrix A.

// This matrix A has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than or equal to the last integer of the previous row.
// Return 1 if B is present in A, else return 0.

// NOTE: Rows are numbered from top to bottom, and columns are from left to right.

// 1st approach : Find the correct row, if found apply binary search on that row.
function solve(arr,target){

    let N = arr.length, M = arr[0].length;

    let row = 0;
    while(row<N){
        if(arr[row][0] <= target && arr[row][M-1] >= target) {
            break;
        }
        row++;
    }
    if(row === N) return 0;
    let start = 0, end = M-1;
    while(start <= end){
        let mid = Math.floor(( start + end ) / 2 );
        if(arr[row][mid] == target) return 1;
        if(arr[row][mid] < target){
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return 0;

}
 // Aprroach 2 : Consider matrix as a flattened array. Apply direct Binary search
function solve2 (arr,target){
    let N = arr.length , M = arr[0].length;
    
    let start = 0, end = (N * M) - 1;

    while(start <= end){
        let mid = Math.floor(( start + end ) / 2);
        let row = Math.floor(mid / M);
        let col = mid%M;
        console.log(start,end,mid,row,col);
        if(arr[row][col] == target) return 1;
        if(arr[row][col] < target){
            start = mid + 1 ;

        }
        else {
            end = mid - 1;
        }
    }
    return 0;
}
// 0 + 7/2 = 3 3/2 = 1 3%4 = 3 arr[1][3] = 131 > target  : end = 3-1 =2;
// 0 + 2/2 = 1  1/2 = 0 1%4 = 1 arr[0][1] = 17 > target : end = 1-1 = 0 
// start - 0 , end = 0; base case



let arr =[ 
    [
        [2, 9, 12, 13, 16, 18, 18, 19, 20, 22],
        [29, 59, 62, 66, 71, 75, 77, 79, 97, 99],
      ]
  ];

let target = 45;

let result = solve(arr,target);
let result2 = solve2(arr,target);
console.log(result,result2);
//2 10 2 9 12 13 16 18 18 19 20 22 29 59 62 66 71 75 77 79 97 99
