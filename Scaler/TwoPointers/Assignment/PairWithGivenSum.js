/* Given a sorted array of integers (not necessarily distinct) A and an integer B, find and return how many pair of integers
 ( A[i], A[j] ) such that i != j have sum equal to B.

Since the number of such pairs can be very large, return number of such pairs modulo (109 + 7). */

function solve(arr , B){
    console.log(arr);
    let N = arr.length;
    let p1 = 0, p2 = N-1;
    let count = 0;
    let mod = 1e9+7;
    while( p1 < p2){
        let sum = arr[p1] + arr[p2]; // calculated sum
        if(sum == B) {
            if(arr[p1] == arr[p2]){ // here we are checking if our element at p1 and p2 is equal, 
                //if equal than this means there is a  range of same elements like [1 2 2 2 2 2 2 4], 
                //so here we will calculate the total by range which will be equal to p2-p1 +1.
                // so if in ex p1 = 1 and p2 =6 then range= 6 , total pair will be n* n-1/2 , 6* 6-1 /2 = 15
                let range = p2 - p1 + 1;
                count += Math.floor((range * (range - 1)) /2) % mod;
                break;
            }
            //if not equal , calculate count of arr[p1] and arr[p2] and multiply them to find pairs.
            let a = 1;
            let b = 1;
            while(p1 + 1  < N && arr[p1]  == arr[p1 + 1]) { 
                a++;
                p1++;
            }
            while(p2 > 0 && arr[p2]  == arr[p2-1]) {
                b++;
                p2--;
            }
            count += (b * a) % mod;
            p1 ++;
            p2 --;
        }
        else if( sum < B){
            p1++;
        }
        else {
            p2--;
        }

    }
    return count;
}


let arr = [1,1,2,2,3,3,4,5,5,6,9,10];
let B = 5;
console.log(solve(arr,B));