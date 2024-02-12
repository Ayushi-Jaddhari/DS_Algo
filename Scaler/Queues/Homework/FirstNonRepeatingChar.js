// Given a string A denoting a stream of lowercase alphabets, you have to make a new string B.
// B is formed such that we have to find the first non-repeating character each time a character is inserted to the stream and append it 
// at the end to B.
//  If no non-repeating character is found, append '#' at the end of B.


function solve(A){
    let map = [];
    let queue = [];
    let result = [];

    for(let i = 0 ; i < A.length ; i++){
        map[A[i]] = (map[A[i]] || 0) + 1;
        queue.push(A[i]);
        console.log('1', map,queue)
        while(queue.length && map[queue[0]] > 1 ) queue.shift();
        console.log('2', map,queue)
        if(queue.length) result+=queue[0];
        else result+='#';
    }
    return result;
}


A = 'ptp';
console.log(solve(A));