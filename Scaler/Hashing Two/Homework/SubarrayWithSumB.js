// Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

// If the answer does not exist return an array with a single integer "-1".

// First sub-array means the sub-array for which starting index in minimum.



function sum(arr,B){
    let map = new Map();
    let n = arr.length;
    let sum = 0;
    let j = 0, i = -1;
    for(j ; j< n ; j++){
        sum += arr[j];
        console.log(sum,sum-B,map);
        if(sum == B){
            i = 0;
            break;
        }

        if(map.has(sum - B)) {
            i = map.get(sum - B)+1;
            break;
        }
        //if(map.has(sum))
         map.set(sum,j);
    }

    if(i == -1) return [-1];
    return arr.slice(i,j+1);

}


A = [1,2,3,4,5,6,7,7,8,9,10]
B = 12  

console.log(sum(A,B));