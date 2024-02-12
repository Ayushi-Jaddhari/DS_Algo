// You are given 3 sorted arrays A, B and C.

// Find i, j, k such that : max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])) is minimized.

// Return the minimum max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])).

function solve(A , B , C){
    let N = A.length;
    let M = B.length;
    let O = C.length;
    let i = 0 , j = 0 , k = 0;
    let ans = Number.POSITIVE_INFINITY;
    while( i < N && j < M && k < O){
        let AminusB = A[i] - B[j];
        let BMinusC = B[j] - C[k];
        let CMinusA = C[k] - A[i];
        let max = Math.max(Math.abs(AminusB), Math.abs(BMinusC), Math.abs(CMinusA));
        if(max < ans) ans = max;
        if(Math.abs(AminusB) >= Math.abs(BMinusC) && Math.abs(AminusB) >= Math.abs(CMinusA)){
            if( AminusB > 0){
                j++;
            }
            else{
                i++;
            }
        }
        else if(  Math.abs(BMinusC) >=  Math.abs(AminusB) &&  Math.abs(BMinusC) >=  Math.abs(CMinusA) ){
            if(BMinusC > 0){
                k++;
            }else{
                j++;
            }
        }
        else if(  Math.abs(CMinusA) >=  Math.abs(AminusB) &&  Math.abs(CMinusA) >=  Math.abs(BMinusC) )
            if(CMinusA > 0){
                i++;
            }
            else{
                k++;
            }
        }
        return ans;
}




 A = [1, 4, 10]
 B = [2, 15, 20]
 C = [10, 12]

console.log(solve(A,B,C));