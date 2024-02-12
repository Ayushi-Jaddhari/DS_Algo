//Problem Statement: Given an m*n 2D matrix and an integer, write a program to find if the given integer exists in the matrix.

// Given matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row
// Example 1:

// Input: matrix = 
// [[1,3,5,7],
//  [10,11,16,20],
//  [23,30,34,60]], 

// target = 3

// Output: true

// Explanation: As the given integer(target) exists in the given 2D matrix, the function has returned true.
// Example 2:

// Input: matrix = 
// [[1,3,5,7],
//  [10,11,16,20],
//  [23,30,34,60]], 

// target = 13

// Output: false

// Explanation: As the given integer(target) does not exist in the given 2D matrix, the function has returned false.


let matrix = 
[[1,3,5,7],
 [10,11,16,20],
 [23,30,34,60]], 
target =61;

var searchMatrix = function(matrix, target) {
    for(let i=0;i<matrix.length;i++){
        if(target>=matrix[i][0] && target<=matrix[i][matrix[0].length-1]){
            for(let j=0;j<matrix[0].length;j++){
                if(target===matrix[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
};

console.log(searchMatrix(matrix,target))