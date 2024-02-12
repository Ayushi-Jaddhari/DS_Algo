/* Farmer John has built a new long barn with N stalls. Given an array of integers A of size N where each element of the array represents the location of the stall and an integer B which represents the number of cows.

His cows don't like this barn layout and become aggressive towards each other once put into a stall. To prevent the cows from hurting each other, John wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance? */


function check(stalls,cows,distance){
    let count  =  1 ,  lastOccupiedStall = stalls[0];

    for(let i = 1 ; i < stalls.length ; i++){
        if(stalls[i] - lastOccupiedStall >=distance){
            count++;
            lastOccupiedStall = stalls[i];
        }
    }
    if(count >= cows) return true;
    return false;
}
function solve(stalls , cows){
    stalls.sort((a,b) => a-b);
    let N = stalls.length;
    let ans = 1;
    let start = 1;
    let end = stalls[N-1] -stalls[0];
    while(start <= end){

        let distance = Math.floor((start+end)/2);
        
        if(check(stalls,cows,distance)){
            ans = distance;
            start = distance + 1;
        }
        else{
            end = distance - 1;
        }

    }
    return ans;
}


let stalls = [5,17,100,11], cows  = 2;
let result = solve(stalls,cows);

console.log(result);