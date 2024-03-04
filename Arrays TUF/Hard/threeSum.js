














var threeSum = function(nums) {
    let ans = [];
    let set = new Set();
    for(let i = 0 ; i < nums.length - 2 ; i++){
        for(let j = i + 1; j < nums.length - 1 ; j++){
            for(let k = j+1 ; k < nums.length ; k++){
                if(nums[i] + nums[j] + nums[k] == 0){
                    let val = [nums[i] , nums[j] , nums[k]];
                    let valString = val.sort((a,b)=>a-b).join('');
                    if(!set.has(valString)){
                        ans.push(val);
                        set.add(valString);
                    }
                }
            }
        }
    }
  
    return ans;
    
};

var threeSum = function(arr) {
let n = arr.length
let ans = []

// check all possible triplets:
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                let temp = [arr[i], arr[j], arr[k]];
                temp.sort((a, b) => a - b);
                ans.push(temp);
            }
        }
    }
}

//store the set in the answer:
let set  = new Set(ans.map(JSON.stringify));
ans = Array.from(set).map(JSON.parse);
return ans;

};




