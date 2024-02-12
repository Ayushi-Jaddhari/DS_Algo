// Problem Description
// Given an array of integers A. There is a sliding window of size B, moving from the very left of the array to the very right.
//  You can only see the B numbers in the window. Each time the sliding window moves rightwards by one position. 
//  You have to find the maximum for each window.

// Return an array C, where C[i] is the maximum value in the array from A[i] to A[i+B-1].

// Refer to the given example for clarity.

// NOTE: If B > length of the array, return 1 element with the max of the array.


function solve(A,B){
    let N = A.length;
    let queue = new Queue;
    let ans = [];

    for(let i = 0 ; i < B ; i++){
        while( queue.size && queue.rear() < A[i]){
            queue.dequeueRear();
        }
        queue.enqueue(A[i]);
    }
    ans.push(queue.front());
    console.log(queue,ans);
    for(let i = B ; i < N  ; i++){
        while( queue.size && queue.rear() < A[i]){
            queue.dequeueRear();
        }
        queue.enqueue(A[i]);
        if(queue.front() == A[i - B]) queue.dequeueFront();
        ans.push(queue.front());
        console.log(queue,ans);
    }
    return ans;
}


class Queue{
    constructor(){
        this.items = {};
        this.rearIndex = 0;
        this.frontIndex = 0;
        this.size = 0;
    }
    enqueue(data){
        this.items[this.rearIndex] = data;
        this.rearIndex++;
        this.size++;
    }
    dequeueFront(){
        let ele = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        this.size --;
        return ele;
    }
    dequeueRear(){
        let ele = this.items[this.rearIndex];
        delete this.items[this.rearIndex];
        this.rearIndex--;
        this.size --;
        return ele;
    }
    front(){
       // console.log('front',this.frontIndex)
        let ele = this.items[this.frontIndex];
        return ele;
    }
    rear(){
        //console.log('rear',this.rearIndex - 1);
        let ele = this.items[this.rearIndex - 1];
        return ele;
    }
}
//[3, 3, 5, 5, 6, 7]
A = [1, 3, -1, -3, 5, 3, 6, 7]
B = 3


console.log(solve(A,B));