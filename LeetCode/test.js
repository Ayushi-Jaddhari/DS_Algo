function solve(A,B,C) {
   let result = new Array();
   let temp = new Array()
 
  function combination(start, limit, range, current) {
    if (range == 0) {
        result.push(current.slice(0));
        return;
    }
    for (let i = start; i <= limit - range + 1; i++) {
        // iterate over all possible next element
        current.push(i);
        combination(i + 1, limit, range - 1, current);
        current.pop();
    }
}
      combination(1, A, B, temp);
      return result;

  }

console.log(solve(10,1));
//27 24 17 


