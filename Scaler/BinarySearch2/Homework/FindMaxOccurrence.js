// Given an array of integers A of size N and an integer B.

// In a single operation, any one element of the array can be increased by 1. You are allowed to do at most B such operations.

// Find the number with the maximum number of occurrences and return an array C of size 2, where C[0] is the number of occurrences, and C[1] is the number with maximum occurrence.
// If there are several such numbers, your task is to find the minimum one.

// 1st way
// function solve(arr , limit){
//     arr.sort((a,b)=> b-a);
//     let N = arr.length;
//     let currLimit = limit ;
//     let maxOccurrence = 0 , number = -1;
//     for(let i=0; i<N;i++){
//         let currOcc = 1;
//         for(let j = i+1 ; j<N; j++){
//             if(arr[i] == arr[j]) currOcc++;
//             else if(arr[i] - arr[j] <= currLimit){
//                 currOcc ++;
//                 currLimit -= (arr[i] - arr[j]);
//             }
//             else {
//                break;
//             }
//         }
//         if(currOcc >= maxOccurrence) {
//             maxOccurrence = currOcc;
//             number = arr[i];
//         }
//         currLimit = limit;
//     }
//     return [maxOccurrence,number]

// }

// function solve(arr , limit){
//     arr.sort((a,b)=> a-b);
//     let N = arr.length;
//     let maxOccurrence = 0 , number = -1;

//     for(let i = N-1; i>=0 ; i--){
//         let count = 0;
//         let operations = limit;
//         for(let j = i ; j>=0 ; j--){
//             if(arr[i] - arr[j] <= operations){
//                 count++;
//                 operations -= (arr[i] - arr[j]);
//             }
//             else break;
//         }
//         if(count >= maxOccurrence ) {
//             maxOccurrence = count;
//             number = arr[i];
//         }
//     }
//     return [maxOccurrence , number];
// }
// Optimised soln
// function count(prefixSum,index,arr,limit){
//     let start  = 0, end = index - 1;
//     let ans = 1;
//     while(start <= end){
//         let count = Math.floor((start+end)/2);
//         let ps = count - 1 >=0 ?prefixSum[index - 1] - prefixSum[count -1] : prefixSum[index - 1];
//         let diff = Math.abs((((index -1) - count +1) * arr[index]) - ps);
//         if(diff == limit){
//            return index - count +1;
//         }
//         else if(diff < limit){
//             ans = index - count + 1;
//             end = count - 1;
//     } else {
//             start = count + 1;
//     }
// }
// return ans;
// }
// function solve(arr , limit){
//     arr.sort((a,b)=> a-b);
//     let ans = Array(2).fill(-1);
//     let N = arr.length;
//     let prefixSum = [];
//     prefixSum[0] = arr[0];
//     for(let i = 1 ; i<N;i++){
//         prefixSum[i] = prefixSum[i-1] + arr[i];
//     }
//     let max =  Number.MIN_VALUE, element = Number.MIN_VALUE;
//     for(let i=0 ; i<N;i++){
//         let elemCount = count(prefixSum,i,arr,limit);
//         if(max < elemCount){
//             element = arr[i];
//             max = elemCount;
//         }

//     }

//     return [max,element];
// }

function solve(A, B) {
  A.sort((a, b) => a - b);
  let n = A.length;
  let maxOccurrence = Number.MIN_VALUE;
  let element = 0;
  let currLimit = 0;
  let i = 0,
    j = 0;
  console.log(A);
  while (j < n) {
    if (currLimit <= B) {
      console.log("currLimit <= B", currLimit <= B);
      console.log("maxOccurrence < j - i + 1", maxOccurrence < j - i + 1);
      if (maxOccurrence < j - i + 1) {
        maxOccurrence = j - i + 1;
        element = A[j];
      }
    }
    console.log(currLimit, i, j);
    if (currLimit <= B) {
      j++;
      currLimit += (A[j] - A[j - 1]) * (j - i);
      console.log("If", currLimit, i, j);
    } else {
      i++;
      currLimit -= A[j] - A[i - 1];
      console.log("else", currLimit, i);
    }
  }
  return [maxOccurrence, element];
}

let arr = [3, 1, 2, 2, 1];
let limit = 3;

let result = solve(arr, limit);

console.log(result);
