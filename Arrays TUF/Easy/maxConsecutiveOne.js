

function maxConsecutiveOne(arr){
    let max = 0;

   for(let i = 0 ; i < arr.length ; i++){
       if(arr[i] == 0) continue;
       let ans = 0;
       for(let j = i ; j < arr.length ; j++){
           if(arr[j] == 0){
               break;
           }
           else{
               ans++;
           }
       }
       if(ans > max) max = ans;
   }
   return max;
}

function maxConsecutiveOne(arr){
    let max = 0;
    let i = 0, ans = 0;
    while( i < arr.length){
       
        if(arr[i] == 0){
            if(ans > max) max = ans;
            ans = 0;
        }
        else{
            ans ++;
        }
        i++;
    }
    if(ans > max) max = ans;
    return max;
}