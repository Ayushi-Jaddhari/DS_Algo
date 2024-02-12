// const n1 ={
//     data:100
// };
// const n2 ={
//     data:200
// };

// n1.next =n2;

// console.log(n1);

class Node{
    constructor(data,next=null){
        this.data=data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size=0;
    }

    //Insert first node(head node)
    insertFirst(data){
        this.head = new Node(data,this.head);
        this.size++;
    }


    //Insert last node
insertLast=(data)=>{
let node = new Node(data);
let current;
//If empty, make it head

if(!this.head){
    this.head = node;
}else{
    current = this.head;
    while(current.next){
current = current.next;
    }
    current.next = node;
}
this.size++;
}

    //Insert at index
    insertAt(data,index){
        //If index is out of range 
        if(index>0&& index>this.size){
            return;
        }
        //If its first index
        if(index===0){
            // this.head = new Node(data,this.head);
            // return;
            this.insertFirst(data);
        }
        const node = new Node(data);
        let current,previous;
        //Set current to first
        current = this.head;
        let count =0;
        while(count<index){
            previous= current; //Node before the index
            count ++;
            current= current.next; // Node after index
        }
        node.next= current;
        previous .next = node;
        this.size++;

    }

    //Get from at index

    getAtIndex=(index)=>{
        let current = this.head;
        let count =0;
        while(current){
            if(count===index){
           //     console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    //Remove at specific index

    removeAt=(index)=>{
        if(index>0&& index>this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count=0;
        if(index === 0){
            this.head = current.next;
        }else{
            while(count<index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    //clear list
clearList(){
    this.head=null;
    this.size =0;
}

    //Print list data

    printListData(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode=currentNode.next;
        }
    }
    reverse(){
        let current = this.head;
        let previous = null;
        while(current){
            let next = current.next;
            current.next = previous;
            previous = current;
            current= next;
        }
        return previous;
    }

}
const ll = new LinkedList;

ll.insertFirst(200);
ll.insertLast(500);
ll.insertAt(300,1);
ll.insertFirst(100);

//ll.getAtIndex(10);

ll.printListData();
console.log(ll.reverse());
// ll.clearList()
// ll.printListData();

// ll.printListData();

