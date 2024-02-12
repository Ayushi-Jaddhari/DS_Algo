// Given n non-negative integers A[0], A[1], ..., A[n-1] , where each represents a point at coordinate (i, A[i]).

// N vertical lines are drawn such that the two endpoints of line i is at (i, A[i]) and (i, 0).

// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container.

function solve(arr){
    let N = arr.length;
    let p1 = 0, p2 = N-1;
    let ans = 0;
    while(p1 < p2){
        let height = Math.min(arr[p1],arr[p2]);
        let capacity = height * (p2 -p1);
        if(capacity > ans) ans = capacity;
        if(arr[p1] > arr[p2]) p2 --;
        else p1 ++;
    }
    return ans;
}

let arr = [1,4,5,3,5,35,3,6,7,3,88,33,53,63,2];
console.log(solve(arr));