function firstOCcurence(arr,n,key){
//console.log(n,arr,key);
if(n==0){
return -1
}
if(arr[0]=== key){
return 0;
}
let ans = firstOCcurence(arr.splice(1,n-1),n-1,key);
if(ans!==-1){
return ans +1;
}

return -1;
}

console.log(firstOCcurence([10,20,23,3,2,2,1,24,5],9,2))