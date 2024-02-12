let spell =['zero','one','two','three','four','five','six','seven','eight','nine'];
function printSpell(n){
//console.log(n)
if(n==0){
return ;
}
let lastDigit =n%10;
printSpell(Math.floor(n/10));
console.log( spell[lastDigit]);
}
//let n = prompt('Please enter a number')
console.log(printSpell(200))