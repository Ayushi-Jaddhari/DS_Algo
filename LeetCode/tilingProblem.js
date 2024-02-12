function tiles(n,m){
    if(n<m) return 1;
	 op1 = tiles(n-1, m);
	 op2 = tiles(n-m, m);
	return (op1 + op2);
}

function tillingProblem( n,  m){
    return tiles(n, m);
}
console.log(tillingProblem(4,5))