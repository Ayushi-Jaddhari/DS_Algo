function printSum(i,arr){
    if(i>=mainArr.length){
    console.log(arr);
    return;
    }
    arr.push(mainArr[i]);//to add value in arr
    printSum(i+1,arr);
    arr.pop(mainArr[i]);// to remove last value from arr
    printSum(i+1,arr);
    }
    
    let mainArr =[3,1,2,4];
    printSum(0,[])
    