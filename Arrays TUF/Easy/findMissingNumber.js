function findMissingNumber1(arr){
    for(let i = 0 ; i < arr.length ; i++){
        let flag = false;
        for(let j = 0 ; j < arr.length ; j++){
            if(arr[j] == i) {
                flag = 1;
                break;
            }
        }
        if(flag == false) return i;
    }
    return arr.length;
}

function findMissingNumber2(arr){
    let n = arr.length;
    let mappingArray = new Array(n).fill(0);
    for(let i = 0 ; i < arr.length ; i++){
        mappingArray[arr[i]]  = 1;
    }
    for(let i = 0 ; i < n ; i++){
        if(mappingArray[i] == false) return i;
    }
    return n;
}

function findMissingNumber3(arr){
    const n = arr.length;
    
    const sum = (n * (n + 1)) / 2;
    let nums_sum =  0;
    for(let i = 0 ; i < arr.length ; i++){
        nums_sum += arr[i];
    }

    return sum - nums_sum;
}




function findMissingNumber4(arr){
    let  i = 0;
    while( i < arr.length){
        while(arr[i] != i && arr[i] < arr.length){
            let temp = arr[i];
            arr[i] = arr[temp];
            arr[temp] = temp;
        }
        i++;
    }
    for(let i = 0 ; i < arr.length ; i++){
        if(i != arr[i]) return i;
    }
    return arr.length;
}

function findMissingNumber5(arr){
    let xor = 0;
    for(let i = 0 ; i < arr.length ; i++){
        xor = xor ^ arr[i]; //3 
        xor = xor ^ (i+1);
    }
    return xor;
}
let arr = [1,0,2,4];

let result = findMissingNumber5(arr);
console.log(result);