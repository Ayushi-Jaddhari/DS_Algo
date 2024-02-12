// function solve(arr){
//     quickSort(arr, 0 , arr.length-1);
//     return arr;
// }
// function quickSort(arr,start,end){
//     if(start >= end) return;
//     let index = partition(arr,start,end);
//     quickSort(arr,start,index-1);
//     quickSort(arr,index+1,end);
// }

// function partition(arr , start , end){
//     let p1 = start + 1;
//     let p2 = end;
//     let pivot = arr[start];
//     while(p1 <= p2){
//         if(arr[p1] <= pivot) p1++;
//         else if ( arr[p2] > pivot) p2 --;
//         else{
//             [arr[p1] , arr[p2]] = [arr[p2] , arr[p1]];
//             p1++;
//             p2 --;
//         }
//     }
//     [arr[p2] , arr[start]] = [arr[start] , arr[p2]];
//     return p2;
// }
// //Given an array of integers A of size N that is a permutation of [0, 1, 2, ..., (N-1)], if we split the array into some number of "chunks" (partitions), and individually sort each chunk. After concatenating them in order of splitting, the result equals the sorted array.

// What is the most number of chunks we could have made?


function solve(arr){
    let N = arr.length;
    let max = Number.MIN_VALUE;
    let count = 0;
    for(let i=0 ; i < N ;i++){
        max  = Math.max( max , arr[i]);
        console.log(max,i);
        if(i == max) count++;
    }
    return count;
}

let arr = [5,4,3,2,1,0];

let result = solve(arr);
console.log(result);