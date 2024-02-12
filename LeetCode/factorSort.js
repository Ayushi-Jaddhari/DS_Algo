function compareNumbers(a, b) {
  let factorsofA= factors(a);
  let factorsofB = factors(b);
  if(factorsofA<factorsofB){
      return -1;
  }
  if((factorsofA==factorsofB) && (a<b)){
      return -1
  }
  else{
      return 1;
  }
}
function factors(a){
    a = Number(a)
    let count =0;
    for(let i=1;i*i<=a;i++){
        if(a%i==0){
            if(a/i==i) count+=1;
            else count+=2;
        }
    }
    return count;
}
function solve(A){
    A.sort(compareNumbers);
    return A
}

console.log(
  solve(
    [ 36, 13, 13, 26, 37, 28, 27, 43, 7 ]
  )
);
