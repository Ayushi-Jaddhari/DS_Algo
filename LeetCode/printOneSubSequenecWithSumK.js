function printSum(i,arr,plus){
    if(i>=mainArr.length){
    if(plus==sum){
    console.log(arr);
    return true;
    }
    return false;
    }
    arr.push(mainArr[i]);
    plus+= mainArr[i];
    if( printSum(i+1,arr,plus) == true) return true;
    arr.pop(mainArr[i]);
    plus-=mainArr[i]
    if(printSum(i+1,arr,plus)== true ) return true;
    }
    
    let mainArr =[1,3,4,2,2];
    let sum = 4
    printSum(0,[],0)