// Given an integer A representing the number of square blocks. The height of each square block is 1. The task is to create a staircase of max-height using these blocks.

// The first stair would require only one block, and the second stair would require two blocks, and so on.

// Find and return the maximum height of the staircase.


function solve(blocks){

    let start = 0 , end = blocks;
    let maxHeight = 0;
    
    while(start <= end) {

        let mid = Math.floor((start + end) / 2);
        let blocksRequired = Math.floor((mid * (mid + 1)) / 2);
        if(blocksRequired == blocks) return mid;
        if(blocksRequired < blocks) {
            maxHeight = mid;
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    } 

    return maxHeight;
}

let blocks = 20;

let result = solve(blocks);

console.log(result);