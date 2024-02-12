function linearSearch(arr,target){
    
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == target) return i;
    }
    return -1;
}


let arr = [1,2,0,3,0,5,12,0,10,0];
let arr1 = [1,1,1,1,1,1,1,1];
let arr2 = [0,0,0,0,0,1,1,1,1,1];
let arr3 = [1,1,1,1,0,0];
let target = 2;

let result = linearSearch(arr3,target);
console.log(result);