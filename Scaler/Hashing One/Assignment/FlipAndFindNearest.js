/* Given a binary string A of size N. There are Q queries given by the 2-D array B of size Q x 2.

Each query has 2 integers :-

First integer denotes the type of query. Type of query can be either 1 or 2.
Second integer denotes index x.
If type = 1, Flip the value at index x.

If type = 2, Find the index of the nearest 1 to the left or right of index x in the array. If there are multiple indices has the same distance from x, return the index with the lower value. If there is no occurrence of 1 in the array, return -1.

Note :
We use 1-based indexing */

function solve(A , B){
    
    let N = B.length;
    let set = new Set();
    for(let i = 0 ; i < A.length ; i++){
        if(A[i] == 1) set.add(i+1);
    }
    let ans = []
    console.log(set);
    for(let i = 0 ; i < N ; i++){
        let type = B[i][0];
        let index = B[i][1];

        if(type == 1){
            if(set.has(index)) set.delete(index);
            else set.add(index);
        }
        else{
            console.log(set,index);
            if(set.size == 0) {
                ans.push(-1);
                continue;
            }
            if(set.has(index)) {
                ans.push(index);
                continue;
            }
                let leftSetIndex = index-1;
                while(!set.has(leftSetIndex) && leftSetIndex >=0){
                    leftSetIndex --;
                }
                let rightSetIndex = index+1;
                while(!set.has(rightSetIndex) && rightSetIndex <= A.length){
                    rightSetIndex ++;
                }
                console.log(index,leftSetIndex,rightSetIndex);

                if(leftSetIndex < 0 && rightSetIndex > A.length){
                    ans.push(-1);
                }
                else if(leftSetIndex < 0){
                    ans.push(rightSetIndex);
                }
                else if(rightSetIndex > A.length){
                     ans.push(leftSetIndex);
                }
                else {
                    console.log('In else for index', index)
                    let distanceOnLeft = index - leftSetIndex;
                    let distanceOnRight = rightSetIndex - index;
                    if(distanceOnLeft <= distanceOnRight){
                        ans.push(leftSetIndex);
                    }
                    else{
                        ans.push(rightSetIndex);
                    }
                }
            }
            
   }
   return ans;
}




A = '111100100011001011000001111111000011101100101111101001101001001010110110011011'
B = [[2,9],[1,11],[1,15],[2,56],[1,26],[1,14],[2,24],[1,45],[2,30],[2,16],[2,66],[2,67],[1,21],[2,20],[2,56],[2,2],[1,78],[1,3],[1,70],[1,16],[1,47],[2,23],[1,61],[1,9],[2,30],[2,37],[1,46],[1,4],[1,49],[2,2],[2,32],[2,25],[1,35],[1,41],[2,39],[1,48],[1,59],[2,77],[1,68],[1,77],[1,36],[1,6],[1,58],[1,15],[1,64],[1,63],[1,63],[2,60],[2,66],[1,25],[1,38],[2,64],[1,44],[1,52],[2,8],[2,78],[1,17],[1,47],[2,6],[2,69],[2,17],[2,63],[2,32],[1,17],[2,14],[2,23],[2,9],[2,7],[2,53],[1,18],[1,36],[1,29],[2,77],[2,9],[2,61],[2,75],[2,66],[2,40],[1,55],[2,36],[1,45],[1,10],[1,11],[2,46],[1,57],[1,58],[1,44],[2,59],[2,54],[1,48],[1,23],[2,69],[1,44],[2,40]]
console.log(solve( A , B));