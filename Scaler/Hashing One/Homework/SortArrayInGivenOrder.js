// Given two arrays of integers A and B, Sort A in such a way that the relative order among the elements will be the same as those are in B.
// For the elements not present in B, append them at last in sorted order.

// Return the array A after sorting from the above method.

// NOTE: Elements of B are unique.

function solve(arr1,arr2){ 
    let N = arr1.length;
    let map = new Map();
    for(let i = 0 ; i < N ; i++){
        if(map.has(arr1[i])) map.set(arr1[i], map.get(arr1[i])+1);
        else map.set(arr1[i],1);
    }
    console.log(map);
    let index = 0;
    for(let num of arr2 ){
        if(map.has(num)){
            let value = map.get(num);
            console.log(value);
            while(value){
                arr1[index] = num;
                value --,
                index ++;
            }
            map.delete(num);
        }
    }
    const remainingNumbers = [...map.keys()].sort((a, b) => a - b);
    for(let num of remainingNumbers){
        let value = map.get(num)
        while(value){
            arr1[index] = num;
            value --,
            index ++;
        }
        map.delete(num);
    }
    return arr1;
}

A = [1, 2, 3, 4, 5, 4]
B = [5, 4, 2]

console.log(solve(A , B ));