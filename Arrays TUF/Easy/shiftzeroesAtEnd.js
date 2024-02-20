

function shiftZeroesAtEnd(arr){
    let i = 0;
    let N = arr.length;

    for(let j = 0 ; j < N ; j++){
        if(arr[j] !=0){
            arr[i] = arr[j];
            i++;
        }
    }
    while(i < N){
        arr[i++] = 0;
    }
    return arr;
}


let arr = [1,2,0,3,0,5,12,0,10,0];
let arr1 = [1,1,1,1,1,1,1,1];
let arr2 = [0,0,0,0,0,1,1,1,1,1];
let arr3 = [1,1,1,1,0,0];

let result = shiftZeroesAtEnd(arr3);
console.log(result);