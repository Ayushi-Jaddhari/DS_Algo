// Given an array of integers A and an integer B.
// Find the total number of subarrays having sum equals to B.


function sum(arr,B){
    const map = {};
    let n = arr.length;
    let ans = 0;
    let sum = 0;

    for(let i = 0 ; i < n ; i++){

        sum += arr[i];

        if(sum === B) ans++;

        if(map[sum - B]){
            ans += map[sum - B];
        }
        if(map[sum]) map[sum]++;
        else map[sum] = 1;
    }
    return ans;
}




A = [1, 0, 1]
B = 1
console.log(sum(A,B));
