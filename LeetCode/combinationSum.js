/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 function  Sum(candidates,index,target,arr,result){
    if(index>= candidates.length || target <0 ){
        return
    }
     if(target === 0){
         result.push([...arr])
         return
     }
     arr.push(candidates[index]);
     Sum(candidates,index,target-candidates[index],arr,result)
     arr.pop(candidates[index]);
     Sum(candidates,index+1,target,arr,result)
}
var combinationSum = function(candidates, target) {
let result=[]
  Sum(candidates,0,target,[],result)
   return result
};

let candidates =[2,3,5]
let target =8;
console.log(combinationSum(candidates,target))