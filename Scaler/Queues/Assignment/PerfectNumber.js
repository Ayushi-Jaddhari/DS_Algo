// Given an integer A, you have to find the Ath Perfect Number.

// A Perfect Number has the following properties:

// It comprises only 1 and 2.
// The number of digits in a Perfect number is even.
// It is a palindrome number.
// For example, 11, 22, 112211 are Perfect numbers, where 123, 121, 782, 1 are not.



// function solve(A){
//     let queue = new Queue;
//     queue.enqueue('11');
//     queue.enqueue('22');
//     let count = A;
//     console.log(count);
//     while(count > 1){
//         console.log(count,queue);
//         let frontEle = queue.dequeue();
//         let length = frontEle.length;
//         let mid = length/2;
//         let firstHalf = frontEle.substring(0,mid);
//         let secondHalf = frontEle.substring(mid);
//         console.log(frontEle,firstHalf,secondHalf)
//         queue.enqueue(`${frontEle.substr(0, mid)}11${frontEle.substr(mid, length)}`);
//         queue.enqueue(`${frontEle.substr(0, mid)}22${frontEle.substr(mid, length)}`);
//         count --;
//     }
//     return Number(queue.dequeue());
// }

// class Queue {
//     constructor() {
//     this.item = {};
//     this.backIndex = null;
//     this.frontIndex = null;
//     }
//     enqueue(data){
//         this.item[this.backIndex] = data;
//         this.backIndex++;
//     }
//     dequeue(){
//         const ele =  this.item[this.frontIndex];
//         delete this.item[this.frontIndex];
//         this.frontIndex ++;
//         return ele;
//     }
// }

function reverse(A){
    let i = 0 , n = A.length;

}

function solve2(A){
    let queue = new Queue;
    queue.enqueue('11');
    queue.enqueue('22');
    let count = A;
    
    while(count > 1){
        console.log(queue)
        let ele = queue.dequeue();
        let length = ele.length;
        let mid = length/2;
        let first = ele.substr(0,mid)+'11'+ele.substr(mid);
        let second = ele.substr(0,mid)+'22'+ele.substr(mid,length);
        queue.enqueue(first);
        queue.enqueue(second);
        count --;
    }
    return queue.dequeue()
}


class Queue{
constructor(){
    this.items = {};
    this.rear = 0;
    this.front = 0;
}
enqueue(data){
    this.items[this.rear] = data;
    this.rear++;
}
dequeue(){
    let node = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return node;
}
}
 // 11 22 1111 1221 2112 2222 111111 112211 121121 122221
console.log(solve2(9));
