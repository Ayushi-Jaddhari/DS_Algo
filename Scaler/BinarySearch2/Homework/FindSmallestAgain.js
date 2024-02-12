// Given an integer array A of size N.

// If we store the sum of each triplet of the array A in a new list, then find the Bth smallest element among the list.

// NOTE: A triplet consists of three elements from the array. Let's say if A[i], A[j], A[k] are the elements of the triplet then i < j < k.

function solve (arr, B){
    let N = arr.length;
    arr = arr.sort((a,b) => a-b);
    let start = arr[0] + arr[1] + arr[2];
    let end = arr[N-1] + arr[N-2] + arr[N-3];
    let ans = 0;
    while(start <= end){
        let mid = Math.floor((start + end) /2);

        if(checkCount(mid,arr,B)){
            end = mid - 1;
        }
        else{
            ans = mid;
            start = mid + 1;
        }
    }
    return ans;
}
function checkCount(mid, arr, B){
   
    let N = arr.length;
    let count = 0;
    for(let i = 0 ; i < N ; i++){
         let start = i+1;
         let end  = N-1;

         while(start < end){
            let currSum = arr[i] + arr[start] + arr[end];
            if(currSum < mid){
                count = count + (end - start);
                start ++;
            }
            else{
                end --;
            }
         }
    }
    if(count >= B){
        return true;
    }
    return false;
}

let arr = [ 2 , 4 ,3,2];
let B = 3;
let result = solve(arr, B);
console.log(result);








//Same code with explaination
/* function solve (A, B){
    A.sort((a,b) => a-b);
    let n = A.length;

    //after sorting the array the minimum sum will be the sum of 1st 3 elements
    //and maximum sum will be sum of last 3 elements,
    let start = A[0] + A[1] + A[2];
    let end = A[n-1] + A[n-2] + A[n-3];
    let ans = 0;

    //start the binary search operation.
    while(start <= end){
        // the below mid value indicates the sum for which we need to get the count of triplets.
        let mid = Math.floor((start + end)/2);

        if(this.checkCount(mid, A, B)){
            h = m - 1;
        } else {
            ans = m;
            l = m + 1;
        }
    }

    return ans;
}
function checkCount(m, A, B){
    let n = A.length;
    let count = 0;

    for(let i=0; i<n; i++){
        let s = i+1;
        let e = n-1;

        while(s < e){
            let sum = A[i] + A[s] + A[e];
            if(sum < m){
                count = count + (e - s);
                s++;
            } else {
                e--;
            }
        }
    }
    if(count >= B) {
        return true;
    } else {
        return false;
    }
} */