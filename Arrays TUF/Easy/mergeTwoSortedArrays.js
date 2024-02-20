function mergeTwoSortedArray(arr1,arr2){
    let result = [] , ind = 0;

    let i = 0 , j = 0;

    while( i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            result[ind++] = arr1[i++];
        }
        else{
            result[ind++] = arr2[j++];
        }
    }
    while( i < arr1.length){
        result[ind++] = arr1[i++];
    }
    while( j < arr2.length){
        result[ind++] = arr2[j++];
    }

    return result;
}


let arr1 = [1,3,5,6,9]
let arr2 = [0,2,3,4,7,8,10]


let result = mergeTwoSortedArray(arr1,arr2);
console.log(result);