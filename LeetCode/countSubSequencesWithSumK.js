function printSum(i,arr,plus){
    if(i>=mainArr.length){
    if(plus==sum){
    return 1;
    }
    return 0;
    }
    arr.push(mainArr[i]);
    plus+= mainArr[i];
    let left =printSum(i+1,arr,plus)
    arr.pop(mainArr[i]);
    plus-=mainArr[i]
    let right= printSum(i+1,arr,plus)
    return left + right;
    }
    
    let mainArr =[1,3,4,2,4,4,2,8,-4];
    let sum = 4
    console.log(printSum(0,[],0))
    