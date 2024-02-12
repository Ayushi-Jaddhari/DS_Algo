//Given an integer N. Your task is to return an integer vector containing numbers from 1 to N in increasing order.
function increasingNumber(arr,i){

holder.push(i);
if(arr==i){
return ;
}
 increasingNumber(arr,i+1);
return;
}
let holder =[]
console.log(increasingNumber(20,1),holder)