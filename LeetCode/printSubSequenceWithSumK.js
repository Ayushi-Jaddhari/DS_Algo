function printSum(i,arr,plus){
    //console.log(i,plus,sum)
    if(i>=mainArr.length){
    if(plus==sum){
    console.log(arr);
    }
    
    return;
    }
    arr.push(mainArr[i]);
    plus+= mainArr[i];
    printSum(i+1,arr,plus);
    arr.pop(mainArr[i]);
    plus-=mainArr[i]
    printSum(i+1,arr,plus);
    }
    
    let mainArr =[1,3,4,2,2];
    let sum = 4
    printSum(0,[],0)