

//only common element
function intersectionOfTwoArrays(arr1,arr2){
    // using map
    let map = new Map();
    for(let i = 0 ; i < arr1.length ; i++){
        if(map.has(arr1[i])){
            map.set(arr1[i],map.get(arr1[i])+1);
        }
        else{
            map.set(arr1[i],1);
        }
    }

    let result = [];
    for(let j = 0 ; j < arr2.length ; j++){
        if(map.has(arr2[j])){
            let val = map.get(arr2[j]);
            result.push(arr2[j])
            if(val - 1 > 0 ){
                map.set(arr2[j],val - 1);
            }
            else{
                map.delete(arr2[j]);
            }
        }
    }
    return result;

}
function intersectionOfTwoArrays1(arr1, arr2){
    let i = 0 , j = 0;

     let result = [];

     while( i < arr1.length && j < arr2.length){
            if(arr1[i] == arr2[j]){
                result.push(arr1[i]);
                i++;
                j++;
            }
            else if( arr1[i] < arr2[j]) i++;
            else j++;
     }
     return result;
}




let arr1 = [1,2,3,4,5,5,5,5];
let arr2 = [3,4,5,5,5,6,7,8];

let a = [1,1,1]
let B =  [0,1,0]
const result = intersectionOfTwoArrays(a,B);
console.log(result);
