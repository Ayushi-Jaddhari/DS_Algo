// We are given a number A and we are also given a number N, and we want to computepower of the number,
function findPower(a,n){
    //console.log(n,arr,key);
    if(n===0){
    return 1;
    }
    return a* findPower(a,n-1);
    
    }
function fastpower(a,n){
        //console.log(n)
        if(n===0){
        return 1
        }
        let subProb = fastpower(a,Math.floor(n/2));
        let subprobsqr = subProb*subProb;
        if(n%2===0){
        return subprobsqr;
        }else{
        return a* subprobsqr;
        }
        }
console.log(findPower(0,0)%1)
console.log(fastpower(2,10))