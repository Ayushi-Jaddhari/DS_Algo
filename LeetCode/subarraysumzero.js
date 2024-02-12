function solve(A){
        let length =0;
        let map = new Map();
        let N= A.length;
        let cs = 0
        for(let i=0;i<N;i++){
                cs +=Number(A[i]);
                if(A[i]==0 && length==0) length=1
                if(cs==0) length=i+1;

                if(map.has(cs)){
                    let index = map.get(cs);
                    length = Math.max(length,i-index);
                }
                else{
                   map.set(cs,i)
                }
            }
        
        return length
	}


console.log(solve([ 9, -20, -11, -8, -4, 2, -12, 14, 1 ]))
//Create a variable (sum), length (max_len), and a hash map (hm) to store the sum-index pair as a key-value pair.
// 2) Traverse the input array and for every index, 
// -> Update the value of sum = sum + array[i].
// -> Check every index, if the current sum is present in the hash map or not.
// -> If present, update the value of max_len to a maximum difference of two indices (current index and index in the hash-map) and max_len.
// -> Else, put the value (sum) in the hash map, with the index as a key-value pair.
// 3) Print the maximum length (max_len).