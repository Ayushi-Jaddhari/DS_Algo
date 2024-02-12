/* Given a matrix of integers A of size N x M in which each row is sorted.

Find and return the overall median of matrix A.

NOTE: No extra memory is allowed.

NOTE: Rows are numbered from top to bottom and columns are numbered from left to right. */

// !st Way: Create an sorted array and find median
/* function solve(matrix){
    let arr = [];

    let i = 0;
    for(let j = 0; j <matrix.length; j++){
        for(let k = 0 ; k<matrix[0].length; k++){
            arr[i] = matrix[j][k];
            i++;
        }
    }
    arr.sort((a,b) => a-b);
    let N = arr.length;
    let NbyTwo = Math.floor(arr.length/2);
    console.log(arr,N,NbyTwo)
    if(N & 1){
        return arr[NbyTwo]
    }
    else{
        return Math.floor((arr[NbyTwo]+arr[NbyTwo-1])/2);
    }
}
 */

function solve (matrix) {
    function getCount(val) {
      let ret = 0;
      for (let i = 0; i < matrix.length; i++) {
        let lo = 1,
          hi = matrix[i].length,
          mid,
          ans = 0;
        while (lo <= hi) {
          mid = (lo + hi) >> 1;
          if (matrix[i][mid - 1] <= val) {
            ans = mid;
            lo = mid + 1;
          } else hi = mid - 1;
        }
        ret += ans;
      }
      return ret;
    }

    let need = Math.floor((matrix.length * matrix[0].length) / 2);
    let lo = 1;
    let hi = 1e9;

    let mid, ans;
    while (lo <= hi) {
      mid = (lo + hi) >> 1;
      let count = getCount(mid);
      if (count >= need + 1) {
        ans = mid;
        hi = mid - 1;
      } else lo = mid + 1;
    }
    return ans;
  };


let matrix  = [   [1, 3, 5],[2, 6, 9],[3, 6, 9]   ]     

let result = solve(matrix);
console.log(result);