//You are given an integer array of size N. Your aim is to find all the occurrences (indices) of a given element.
function allOCcurence(arr,key,i){
    //console.log(n,arr,key);
    if(arr.length==i){
    return ;
    }
    if(arr[i]=== key){
    holder.push(i);
    }
    allOCcurence(arr,key,i+1);
    return;
    }
    let holder =[]
    console.log(allOCcurence([2,10,20,23,3,2,2,1,2,24,5,2],2,0),holder)