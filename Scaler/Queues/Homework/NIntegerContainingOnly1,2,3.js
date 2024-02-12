// Given an integer, A. Find and Return first positive A integers in ascending order containing only digits 1, 2, and 3.

// NOTE: All the A integers will fit in 32-bit integers.


function solve(A){
    let queue = new Queue();
    queue.enqueue('')
    let count = 0;

    while(count < A){
        let x = queue.front();

        let currCount = 1;
        while(currCount <= 3 && count+currCount < A+1){
            let next = x + currCount;
            queue.enqueue(next);
            currCount ++;
        }
        count +=3;
    }
    queue.dequeue();
    return queue.item;

}
class Queue {
    constructor() {
    this.item = [];
    this.backIndex = 0;
    this.frontIndex = 0;
    }
    enqueue(data){
        this.item[this.backIndex] = data;
        this.backIndex++;
    }
    dequeue(){
        this.item.shift();
    }
    front(){
        const ele =  this.item[this.frontIndex];
        this.frontIndex ++;
        return ele;
    }
}

A = 10
console.log(solve(A));