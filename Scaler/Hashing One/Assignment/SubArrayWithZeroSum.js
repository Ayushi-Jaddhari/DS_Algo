/* Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.

If the given array contains a sub-array with sum zero return 1, else return 0. */


function solve(arr){
    
    let N = arr.length;
    let set = new Set();
    let sum = 0;
    let minDistance = Number.POSITIVE_INFINITY;
    for(let j = 0 ; j < N ; j++){
        sum += arr[j];
        if(sum == 0) return 1;
        if(set.has(sum)){
            return 1;
        }
        set.add(sum);
    }
    return 0;
}




let arr = [862,-411,-552,-549,918,434,29,-437,121,-640,-168,-961,929,-427,372,984,488,-756,674,-149,945,566,391,-970,-44,689,-128,-326,43,-312,469,817,-349,260,590,-106,-700,484,-735,-423,660,450,-1148,-237,-844,62,513,506,382,77,244,335]
 

console.log(solve(arr ));