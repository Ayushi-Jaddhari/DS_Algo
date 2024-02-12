// You are given a 2-D matrix C of size A × B.
// You need to build a new 1-D array of size A by taking one element from each row of the 2-D matrix in such a way that the cost of the newly built array is minimized.

// The cost of an array is the minimum possible value of the absolute difference between any two adjacent elements of the array.

// So if the newly built array is X, the element picked from row 1 will become X[1], element picked from row 2 will become X[2], and so on.

// Determine the minimum cost of the newly built array.



function solve(arr){
    let binarySearch = function binarySearch(start,  end , N, arr){
        let ans = -1;
        while( start <= end) {
            let mid = Math.floor((start + end) / 2);
            if(arr[mid] == N){
                return mid;
            }
            if(arr[mid] < N) {
                start = mid + 1;
            }
            else {
                ans = mid;
                end = mid - 1;
            }
        }
        return ans == -1 ? start - 1 : ans;
    }
    let ans = Number.MAX_VALUE;
    for(let i = 0 ; i < A ; i++){
       arr[i].sort((a,b) => a-b);
    }
    for(let i = 0 ; i < A-1 ; i++){
        for(let j = 0 ; j < B ; j++){

            let minDiff = binarySearch(0 , B - 1 , arr[i][j] , arr[i + 1]);
            and = Math.min(ans , Math.abs(arr[i+1][minDiff] - arr[i][j]))
            if(minDiff - 1 >= 0 ){
                ans = Math.min(ans , Math.abs(ar[i][j] - arr[i+1][minDiff-1]));
            }
        }
    }
    return ans;
   
}

let arr = [9,5,43,42,45,52];

let result = solve(arr);

console.log(result);
