// We have a list A of points (x, y) on the plane. Find the B closest points to the origin (0, 0).

// Here, the distance between two points on a plane is the Euclidean distance.

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in.)

// NOTE: Euclidean distance between two points P1(x1, y1) and P2(x2, y2) is sqrt( (x1-x2)2 + (y1-y2)2 ).

function solve(arr,B){
    let customComparator = function(a,b){
        let xsquare = a[0] * a[0] + a[1] * a[1];
        let ysquare = b[0] * b[0] + b[1] * b[1];
        return xsquare - ysquare;
    }
    arr.sort(customComparator);
    let result = [];
    for(let i = 0 ; i < B; i++){
        result.push(arr[i]);
    }
    return result;
    
}

let arr = [ 
    [1, 3],
    [-2, 2] 
  ]
let B = 1

let result = solve(arr,B);
console.log(result);