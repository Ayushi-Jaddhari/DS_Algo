/* Shaggy has an array A consisting of N elements. We call a pair of distinct indices in that array a special if elements at those indices in the array are equal.

Shaggy wants you to find a special pair such that the distance between that pair is minimum. Distance between two indices is defined as |i-j|. If there is no special pair in the array, then return -1 */


function solve(arr){
    
    let N = arr.length;
    let map = new Map();
    let minDistance = Number.POSITIVE_INFINITY;
    for(let j = 0 ; j < N ; j++){
        if(map.has(arr[j])){
            let index = map.get(arr[j]);
            let currDistance = j - index;
            if(currDistance < minDistance){
                minDistance = currDistance;
            }
        }
        map.set(arr[j],j);

    }
    return minDistance == Number.POSITIVE_INFINITY ? -1 : minDistance;
}




let arr = [7, 1, 3, 4, 1, 7]
 

console.log(solve(arr ));