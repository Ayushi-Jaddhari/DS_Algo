// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


var spiralOrder = function(matrix) {

    let n = matrix.length ; let m = matrix[0].length;
    let top = 0 , left = 0 , bottom = n - 1, right = m-1;
    let arr = [];
    
    while(top <= bottom && left <= right){
        for(let i = left ; i <= right ; i++){
            arr.push(matrix[top][i])
        }
        top ++;
        for(let i = top ; i <= bottom ; i++){
            arr.push(matrix[i][right])
        }
        right --;
         if (top <= bottom) {
            for(let i = right ; i >= left ; i--){
                arr.push(matrix[bottom][i]);
            }
            bottom--;
         }
          if (left <= right) {
            for(let i = bottom ; i >= top ; i--){
                arr.push(matrix[i][left]);
            }
            left ++;
         }
    }
   return arr;
    
};