// Given two string A and B of length N and M respectively consisting of lowercase letters. Find the number of occurrences of B in A.


function solve(A, B){
    let n = A.length;
    let m  = B.length;
    let mod = 1e9+7;
    let ans = 0;

   let hashValueForB = 0 , power = 26 , p = 1;
   let hashValueForA = 0;

   for(let i = m - 1 ; i>=0 ; i--){
    let chA = A[i].charCodeAt() - 97;
    let chB = B[i].charCodeAt() - 97;
    hashValueForA = (hashValueForA + (chA * p)) % mod;
    hashValueForB = (hashValueForB + (chB * p)) % mod;
     p = ( p * power) % mod;
   }
 
   p = Math.floor(p/26);
   if(hashValueForA == hashValueForB) ans++;
   let ind = 0;
   for(let i = m ; i < n ; i++,ind++){
        let removingCh =   A[ind].charCodeAt() - 97
        let addingCh =  A[i].charCodeAt() - 97
        hashValueForA = (((hashValueForA - (removingCh * p)) * 26) +  addingCh);
        if(hashValueForA == hashValueForB) ans++;
   }
   return ans;

}


A = "aaaa"
B = "aa"


console.log(solve(A , B));