let arr =[10,18,100,-8,87,4-1,-2,3,5,34];
// only outer loop is recursive
function bubbleSort_rec(arr,n){
if(n==1){
return;
}

for(let j=0;j<n-1;j++){
if(arr[j]>arr[j+1]){
[arr[j],arr[j+1]]=[arr[j+1],arr[j]];
}
}
bubbleSort_rec(arr,n-1);
}


//both loops is recursive
function bubbleSort_rec2(arr,n,j){
    if(n==1){
    return;
    }
    if(j===n-1){
        bubbleSort_rec2(arr,n-1,0);
        return;
    }
    if(arr[j]>arr[j+1]){
    [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
    }

    bubbleSort_rec2(arr,n,j+1);
    }

bubbleSort_rec(arr,arr.length)
console.log(arr);
bubbleSort_rec2(arr,arr.length,0)
console.log(arr);