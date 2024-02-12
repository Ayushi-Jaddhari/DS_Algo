/* <!-- Given 2 integers A and B and an array of integers C of size N. Element C[i] represents the length of ith board.
You have to paint all N boards [C0, C1, C2, C3 … CN-1]. There are A painters available and each of them takes B units of time to paint 1 unit of the board.

Calculate and return the minimum time required to paint all boards under the constraints that any painter will only paint contiguous sections of the board.
NOTE:
1. 2 painters cannot share a board to paint. That is to say, a board cannot be painted partially by one painter, and partially by another.
2. A painter will only paint contiguous boards. This means a configuration where painter 1 paints boards 1 and 3 but not 2 is invalid.

Return the ans % 10000003. --> */


function check(painters,time,maxTime,boards){
    console.log('maxTime',maxTime);
    let count = 1;
    let N = boards.length;
    let paintersTime = maxTime;
    for(let i = 0 ; i < N ; i++){
        if(boards[i] * time > maxTime) return false;

        if(boards[i] * time <= paintersTime){
            paintersTime -= (boards[i] * time);
        }
        else{
            count ++;
            paintersTime = maxTime - (boards[i] * time);
        }
    }
    console.log('count',count)
    if(count <= painters){
        return true;
    }
    return false;
}
function paint(painters,time,boards){
    let N = boards.length;
    let min = boards[0];
    let sum = boards[0];
    let ans = 0;
    for(let i = 1 ; i < N; i++){
        min = Math.max(min,boards[i]);
        sum +=boards[i];
    }
    let start = min * time;
    let end = sum * time;
    console.log(start,end);
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        
        if(check(painters,time,mid,boards)){
            ans = mid;
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
        console.log(start,end);
    }
    return ans % 10000003;
}


let painters = 3;
let time = 10;
let boards = [185,186,938,558,655,461,441,234,902,681];

let result = paint(painters,time,boards);
console.log(result);