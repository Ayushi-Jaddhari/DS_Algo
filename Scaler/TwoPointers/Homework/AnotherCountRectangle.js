/* Given a sorted array of distinct integers A and an integer B, find and return how many rectangles with distinct configurations can be created using elements of this array as length and breadth whose area is lesser than B.

(Note that a rectangle of 2 x 3 is different from 3 x 2 if we take configuration into view) 
Return the number of rectangles with distinct configurations with area less than B modulo (109 + 7). */

function solve(arr , B){
    let N = arr.length;
    let count  = 0;
    let mod = 1e9+7;
    let start = 0 , end = N-1;

    while(start < N && end >= 0){        
        let area = arr[start] * arr[end];
        if(area < B) {
            count= ( count + end  + 1)% mod;
            start++;
        }
        else{
            end --;
        }
    }
 return count;

  
}


let arr = [1,2,3,4,5,6,7,8,9,10];
let B = 12;

console.log(solve(arr,B));