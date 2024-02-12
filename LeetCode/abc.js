 function  solve (A, B){
    let x = input.splice(0,1);
    x = x[0].split(' ')
    let A = Number(x[0]);
    let B = Number(x[1]);
    let query = Number(x[2]);
    let res =[];
    let num =1;
    for(let i=0;i<A;i++){
        let temp=[]
        for(let j=0;j<B;j++){
            temp.push(num);
            num++;
        }
        res.push(temp);
    }
    while(query){
        let m = input.splice(0,1);
        m = m[0].split(' ');
        //console.log(x,x[0],x[0]==1,x[0]==2,x[0]==3,x[0]==4)
        if(m[0]==1){
            let c1 = m[1]-1;
            let c2 =m[2]-1;
           // console.log(c1,c2);
            for(let row =0;row<A;row++){
                let temp = res[row][c1];
                res[row][c1]=res[row][c2];
                res[row][c2]=temp;
            }
        }
        if(m[0]==2){
            let r1 = m[1]-1;
            let r2 = m[2]-1;
           // console.log(r1,r2)
            for(let col=0;col<B;col++){
                let temp = res[r1][col];
                res[r1][col]=res[r2][col];
                res[r2][col]=temp;
            }
        }
        if(m[0]==3){
            let x1= m[1]-1;
            let y1= m[2]-1;
            let x2= m[3]-1;
            let y2= m[4]-1;
          //  console.log(x1,y1,x2,y2);
            console.log(res[x1][y1] | res[x2][y2]);
        }
        if(m[0]==4){
            let x1=m[1]-1;
            let y1 = m[2]-1;
            let x2 = m[3]-1;
            let y2 = m[4]-1;
           // console.log(x1,y1,x2,y2);
            console.log(res[x1][y1] & res[x2][y2])
        }
        query--;
    }
	}

console.log('AAAAAAAAAAAAA============>', solve(8,9)) //9534330