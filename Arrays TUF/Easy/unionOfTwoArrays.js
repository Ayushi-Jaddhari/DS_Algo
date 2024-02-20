

function unionOfTwoArrays(arr1,arr2){
    let result = [] , ind = 0;

    let i = 0 , j = 0;

    while( i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            if(ind == 0 ){
                result[ind++] = arr1[i++];
            }
            else if(ind > 0 && arr1[i] != result[ind - 1]){
                result[ind++] = arr1[i++];
            }
            else{
                i ++;
            }
        }
        else{
            if(ind == 0){
                result[ind++] = arr2[j++];
            }
            else if(ind > 0 && arr2[j] != result[ind - 1]){
                result[ind++] = arr2[j++];
            }
            else{
                j++;
            }
        }
    }

    console.log(result,i,j,ind,arr1.length,arr2.length);
    while( i < arr1.length){
        if(ind == 0){
            result[ind++] = arr1[i];
        }
        else if(ind > 0 && arr1[i] != result[ind - 1]){
            result[ind++] = arr1[i];
        }
        i ++;
     }
    while( j < arr2.length){
        if(ind == 0){
            result[ind++] = arr2[j];
            ind++;
        }
        else if(ind > 0 && arr2[j] != result[ind - 1]){
            result[ind++] = arr2[j];
        }
        j++;
    }

    return result;
}
//code writing
function unionOfTwoArrays2(arr1,arr2){
    let result = [] , ind = 0;

    let i = 0 , j = 0;

    while( i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            if(result.length == 0 || arr1[i] != result[result.length - 1]){
                result.push(arr1[i]);
            }
                i ++;
        }
        else{
            if(result.length == 0 || arr2[j] != result[result.length - 1]){
                result.push(arr2[j]);
            }
                j++;
        }
    }
    while( i < arr1.length){
        if(result.length == 0 || arr1[i] != result[result.length - 1]){
            result.push(arr1[i]);
        }
            i ++;
     }
    while( j < arr2.length){
        if(result.length == 0 || arr2[j] != result[result.length - 1]){
            result.push(arr2[j]);
        }
        j++;
    }

    return result;
}

let arr1 = [1,2,3,4,5,9,11,12]
let arr2 = [1,2,3,4,5,9,11]


let result = unionOfTwoArrays(arr1,arr2);
console.log(result);