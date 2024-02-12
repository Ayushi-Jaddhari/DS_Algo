function lastOCcurence(arr,n,key){
//console.log(n,arr,key);
if(n==0){
return -1
}

let ans = lastOCcurence(arr.splice(1,n-1),n-1,key);
if(ans===-1){
if(arr[0]=== key){
return 0;
}else{
return -1;
}
}else{
return ans +1;
}

return -1;
}

console.log(lastOCcurence([10,20,23,3,2,2,1,24,5],9,15))