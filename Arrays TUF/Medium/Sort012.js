// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of 
// the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

//use in built Sort // TC O(NLOGN)
function sort012Solution1(arr){
    arr.sort((a,b)=> a-b);
    return arr;
}

//Using count/frequency array
function sort012Solution2(arr){
    let countArr = new Array(3).fill(0);

    for(let i = 0 ; i < nums.length ; i++){
        countArr[nums[i]]++;
    }
    let idx = 0;
    for(let i = 0 ; i < 3; i++){
        let val = countArr[i];
        while(val){
            nums[idx] = i;
            idx++, val --;
        }
    }
    return arr;
}


//Using loop and 3 pointers [Dutch National Flag Algorithm]
function sort012Solution3(arr){
    let start = 0 , mid = 0 , end = arr.length - 1;


    while(mid <= end){
        if(arr[mid] == 0){
            [arr[start],arr[mid]] = [arr[mid],arr[start]];
            start++;
            mid++;
        }
        else if( arr[mid] == 2){
             [arr[end],arr[mid]] = [arr[mid],arr[end]];
             end--;
        }
        else{
            mid ++;
        }
    }
 return arr;
}