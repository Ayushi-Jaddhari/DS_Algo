// Problem Statement: Given a matrix m X n, count paths from left-top to the right bottom of a matrix with the constraints that from each cell you can either only move to the rightward direction or the downward direction.

// Example 1:

// Input Format: m = 2, n= 2
// Output: 2

//Link : https://takeuforward.org/data-structure/grid-unique-paths-count-paths-from-left-top-to-the-right-bottom-of-a-matrix/


//Solution 1
// var countPath=(i,j,m,n)=>{
//     if(i>=m || j>=n){
//         return 0;
//     }
//     if(i==m-1 && j==n-1){
//         return 1
//     }
//     return countPath(i+1,j,m,n)+countPath(i,j+1,m,n);
// }

// var uniquePaths = function(m, n) {
//   return countPath(0,0,m,n)
// };

//Solution 2
// var countPaths=(i,j,m,n,dp)=>{
//     //console.log(i,j,m,n)
//     if(i>=m || j>=n){
//         return 0;
//     }
//     if(i==m-1 && j==n-1){
//         return 1
//     }
//     if(dp[i][j]!=-1) {
//         console.log
//         return dp[i][j];
//     }
//     else{ return dp[i][j]=countPaths(i+1,j,m,n,dp)+countPaths(i,j+1,m,n,dp);
//     }
// }

   
// var uniquePaths = function(m,n){
//     let matrix = Array(m+1).fill(Array(n+1).fill(-1))
//     console.log(matrix);
//     let num = countPaths(0,0,m,n,matrix)
//     if(m==1&&n==1) return num;
//        return matrix[0][0];
    
// }


//Solution 3

var uniquePaths = function(m,n){
         if (m === 0 || n === 0) return 0
        if (m === 1 || n === 1) return 1
        
        const map = new Array(m).fill(new Array(n).fill(1))
        
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                map[i][j] = map[i - 1][j] + map[i][j - 1]
            }
        }
        
        return map[m - 1][n - 1]
}



//Solution 4
// var uniquePaths = function(m,n){
//            let N = n + m - 2;
//                 let r = m - 1; 
//                 let res = 1;
                
//                 for (let i = 1; i <= r; i++)
//                     res = res * (N - r + i) / i;
//                 return res;
//     }


console.log(uniquePaths(7,3))