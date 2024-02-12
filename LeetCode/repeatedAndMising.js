//Problem Statement: You are given a read-only array of N integers with values also in the range [1,N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

// Example 1:

// Input Format:  array[] = {3,1,2,5,3}

// Result: {3,4)

// Explanation: A = 3 , B = 4
// Since 3 is appearing twice and 4 is missing
// Example 2:

// Input Format: array[] = {3,1,2,5,4,6,7,5}

// Result: {5,8)

// Explanation: A = 5 , B = 8
// Since 5 is appearing twice and 8 is missing


var findMissingandRepeating=(arr)=>{
let n = arr.length;
let map = new Map();
let missing,repeating;
for(let i=0;i<n;i++){ 
    if(map.has(arr[i])){
        repeating = arr[i]
    }else{
        map.set(arr[i],arr[i]);
    }
}
for(let i=1;i<=n;i++){
    if(!map.has(i)){
        missing = i
      }
}
console.log(missing,repeating);
}


findMissingandRepeating([3,1,2,5,4,6,7,5])