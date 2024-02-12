/* Given two sorted arrays of distinct integers, A and B, and an integer C, find and return the pair whose sum is closest to C and the pair has one element from each array.

More formally, find A[i] and B[j] such that abs((A[i] + B[j]) - C) has minimum value.

If there are multiple solutions find the one with minimum i and even if there are multiple values of j for the same i then return the one with minimum j.

Return an array with two elements {A[i], B[j]}. */

function solve(arr1 ,arr2 , C){
    
    let N = arr1.length;
    let M = arr2.length;
    let diff = Number.MAX_VALUE;
    let p1 = 0 , p2 = M-1;
    let ans = [];
    while( p1 < N && p2 >= 0){

        let sum = arr1[p1] + arr2[p2];
        let currDiff =  Math.abs(sum - C);
        if( currDiff < diff){
            diff = currDiff;
            ans = [arr1[p1],arr2[p2]]
        }
        else if(diff == currDiff && ans[0] == arr1[p1]){
            ans[1] = arr2[p2];
        }
        if(sum < C){
            p1++;
        }
        else {
            p2--;
        }
    }
    return ans;
}


let arr1 = A = [1, 2, 3, 4, 5],
arr2 = [2, 4, 6, 8],
C = 9

console.log(solve(arr1,arr2,C));