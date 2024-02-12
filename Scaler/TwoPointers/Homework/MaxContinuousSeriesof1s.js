/* Given a binary array A, find the maximum sequence of continuous 1's that can be formed by replacing at-most B zeroes.

For this problem, return the indices of maximum continuous series of 1s in order.

If there are multiple possible solutions, return the sequence which has the minimum start index. */

function solve(arr , B){
    let N = arr.length;
    let start = 0, end = 0;
    let maxStartIndex = 0;
    let maxOneCount = 0;
    let countZero = 0;

    while( end < N){
        if( arr[end] == 0) countZero++;
        while(countZero > B){
            if(arr[start] == 0) countZero --;
            start++;
        }
        let currLength = end - start + 1;
        if(currLength > maxOneCount){
            maxOneCount = currLength;
            maxStartIndex = start;
        }
        end++;
    }
    let result =[]
    for(let i = maxStartIndex ; i< maxStartIndex+maxOneCount;i++){
        result.push(i);
    }
 return result;

  
}


let arr = [1, 0, 0, 0, 1, 0, 1];
let B = 2;

console.log(solve(arr,B));