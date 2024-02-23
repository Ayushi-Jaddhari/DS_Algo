// Leaders in an Array
// Problem Statement: Given an array, print all the elements which are leaders. 
//A Leader is an element that is greater than all of the elements on its right side in the array.

// Examples
// Example 1:
// Input:
//  arr = [4, 7, 1, 0]
// Output:
//  7 1 0
// Explanation:
//  Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

// Example 2:
// Input:
//  arr = [10, 22, 12, 3, 0, 6]
// Output:
//  22 12 6
// Explanation:
//  6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is greater than 12, 3, 0, 6.


//BruteForce
function leadersInArray1( arr ){
    let leaderArray = [];
    for(let i = 0; i < arr.length ; i++){
        let flag = true;
        for(let j = i+1; j < arr.length ; j++){
            if(arr[j] > arr[i]) {
                flag = false;
                break;
            }
        }
        if(flag) leaderArray.push(arr[i]);
    }
    return leaderArray;
}

//Optimised

function leadersInArray2(arr){
   
    let lastMax = arr[arr.length - 1];
    let leaderArray = [lastMax];
    for(let i = arr.length - 1 ; i>=0 ; i--){
        if(arr[i] > lastMax) {
            lastMax = arr[i];
            leaderArray.unshift(arr[i]);
        }
    }
    return leaderArray;
}

let arr = [4, 7, 1, 0];
let arr2 = [10, 22, 12, 3, 0, 6]
const result = leadersInArray2(arr);
console.log(result);