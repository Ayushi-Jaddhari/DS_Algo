// Given an one-dimensional integer array A of size N and an integer B.

// Count all distinct pairs with difference equal to B.

// Here a pair is defined as an integer pair (x, y), where x and y are both numbers in the array and their absolute difference is B.



// function solve(arr,B){
//     arr.sort((a,b) => a-b);
//     let count = 0;
//     let N = arr.length;

//     let p1 = 0, p2 = 1;

//     while(p1 < N && p2 < N){
//         if(p1 == p2) {
//             p2 ++;
//             continue;
//         }
//         let a = arr[p1];
//         let b = arr[p2];
//         let diff = b - a;
//         if(diff == B){
//             count++;
//             while(p1 < N && arr[p1] == a ) p1++;
//             while(p2 < N && arr[p2] == b) p2 ++;
//         }
//         else if(diff < B){
//             p2++;
//         }
//         else{
//             p1++;
//         }

//     }
//     return count;
// }

function solve(A,B){
    A.sort((a,b) => a - b)
    let N = A.length, counter = 0;
    let left = 0, right = 1;
    while(left < N && right < N){
        if(Math.abs(A[right] - A[left]) == B){
            counter++
            right++
            left++
        } else if(Math.abs(A[right] - A[left]) < B){
            right++
        } else {
            left-- // Left is starting from zero, so if you have condition like [10,30,40] and B = 10 30-10 = 20>B(10) left -- will take you out of loop. 
            if(left == right) right++
        }
    }
    return counter;
}
const arr = [1, 1, 1, 2, 2]

let  B = 0;

console.log(solve(arr,B));