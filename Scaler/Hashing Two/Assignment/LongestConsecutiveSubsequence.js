/* Problem Description
Given an unsorted integer array A of size N.

Find the length of the longest set of consecutive elements from array A. */


function solve(arr){
    
    let N = arr.length;

    let set = new Set();
    for(let i = 0; i < N ; i++ ){
        set.add(arr[i]);
    }
    let maxSequence = 1;
    for(let i = 0 ; i < N ; i++ ){
        
        let val = arr[i];

        if(! set.has(val - 1)) {
            let seqLength = 0;
            while(set.has(val)){
                seqLength ++;
                val = val + 1;
            }
            if(seqLength > maxSequence) maxSequence = seqLength;
        }
    }
    return maxSequence


}




let arr = [1, 4, 10]
 

console.log(solve(arr ));