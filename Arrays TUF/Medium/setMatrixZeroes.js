// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]



// brute force
var setZeroes = function(matrix) {
    let n = matrix.length , m = matrix[0].length;

    for(let i = 0; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            if(matrix[i][j] == 0){
                let row = i, col = 0;
                while(col < m ){
                    if(matrix[row][col] != 0)
                        matrix[row][col] = null;
                    col++;
                }
                row = 0, col = j;
                while(row < n){
                    if(matrix[row][col] != 0)
                        matrix[row][col] = null;
                    row++;
                }
            }
        }
    }
      for(let i = 0; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            if(matrix[i][j] == null) matrix[i][j] = 0;
        }
      }
};


// taking extra array of size n and m to mark presence of 0 in row and col
var setZeroes = function(matrix) {
    let n = matrix.length , m = matrix[0].length;
    let rowArray = Array(n).fill(0);
    let colArray = Array(m).fill(0);


    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            if(matrix[i][j] == 0) {
                rowArray[i] = 1;
                colArray[j] = 1;
            }
        }
    }
     for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            if(rowArray[i] == 1 || colArray[j] == 1) matrix[i][j] = 0;
        }
    }
    
};


//Optimised space

var setZeroes = function(matrix) {
    let n = matrix.length , m = matrix[0].length;
    let col0 = 1;


    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            if(matrix[i][j] == 0) {
                matrix[i][0] = 0;
                if(j != 0){
                    matrix[0][j] = 0;
                }
                else{
                    col0 = 0;
                }
            }
        }
    }
     for(let i = 1 ; i < n ; i++){
        for(let j = 1 ; j < m ; j++){
            if(matrix[i][j] != 0){
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0;
                }
            }
        }
    }
    if(matrix[0][0] == 0){
        for(let j = 0 ; j < m ; j++){
            matrix[0][j] = 0;
        }
    }
    if(col0 == 0) {
        for(let i = 0 ; i < n ; i++) matrix[i][0] = 0;
    }
    
};
