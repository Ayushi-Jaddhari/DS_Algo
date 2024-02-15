// Longest Subarray with given Sum K(Positives)
// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

// Examples
// Example 1:
// Input Format: N = 3, k = 5, array[] = {2,3,5}
// Result: 2
// Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

// Example 2:
// Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
// Result: 3
// Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.




function longestSubArrWithSumK(arr, k){

    let longestLength = 0;

    for(let i = 0 ; i < arr.length ; i++){
        let currLength = 0;
        let sum = 0;
        for(let j = i ; j < arr.length ; j++){

            if(sum + arr[j] == k ) {
                currLength = j - i + 1;
                if(currLength > longestLength) longestLength = currLength;
                break;
            }
            else if( sum + arr[j] > k) break;
            else sum += arr[j];
        }
    }
    return longestLength;
}



function longestSubArrWithSumK1(arr,k){
    let map = new Map();
    let maxLength = 0;
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++ ){
         sum += arr[i];
         if(sum == k){
            maxLength = i + 1;
         }
         else if(map.has(sum - k)){
            let idx = map.get(sum - k);
            let currLength = i - idx ;
            if(currLength > maxLength) maxLength = currLength;
         }
         map.set(sum,i);
    }
    return maxLength;

}

function longestSubArrWithSumK2(arr,k){
    let pointer1 = 0;
    let pointer2 = 0;
    let sum = arr[0];
    let maxLength = 0;

    while(pointer2 < arr.length){

        while(pointer1 <= pointer2 && sum > k){
            sum -= arr[pointer1];
            pointer1++;
        }
        if(sum == k){
            let currLength = pointer2 - pointer1 + 1;
            if(currLength > maxLength) maxLength = currLength;
        }
        pointer2++;
        if(pointer2 < arr.length) sum += arr[pointer2];
    }
    return maxLength;
}











// let arr = [2,3,5,1,9] , k = 11;

let arr = [2,3,5,1,9] , k = 21;

let result = longestSubArrWithSumK1(arr,k);

console.log(result);