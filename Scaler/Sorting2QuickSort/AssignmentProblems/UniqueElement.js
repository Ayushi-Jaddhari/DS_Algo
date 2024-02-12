// Problem Description
// You are given an array A of N elements. You have to make all elements unique. To do so, in one step you can increase any number by one.

// Find the minimum number of steps.
function uniqueElements(arr){
    arr = arr.sort((a,b)=> a-b);

    let N = arr.length;
    let count = 0;
    for(let i = 1 ; i < N ; i++){
        if(arr[i] <= arr[i-1]){
            let currValue = arr[i];
            arr[i] = arr[i-1] + 1;
            count += (arr[i] - currValue);

        }
    }
    return count;
}



let arr = [1,1,1,1,1,2];

let result = uniqueElements(arr);
console.log(result);