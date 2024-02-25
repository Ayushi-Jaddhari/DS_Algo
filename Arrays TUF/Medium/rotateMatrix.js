



// Using same size matrix and copying row of ,atrix1 as col in matrix 2
var rotate = function(matrix) {
    let n = matrix.length;
    let rotatedMatrix = Array(n).fill(0).map((row) => Array(n).fill(0));


    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++ ){
            rotatedMatrix[j][n-i-1] = matrix[i][j];
        }
    }
    
};

//Optimised

var rotate = function(matrix) {
    let n = matrix.length;
    for(let i =0 ; i < n ; i ++){
        for(let j = i ; j < n ; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for(let i = 0 ; i < n ; i++){
        matrix[i].reverse();
    }


};