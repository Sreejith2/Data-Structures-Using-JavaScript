class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedlist {
    constructor(value){
        this.head ={
        value:value,
        next : null,
        previous : null
        }
        this.tail =this.head;
        this.length = 1;
    }
    append(val){
       const newNode = new Node(val);
       newNode.prev = this.tail;
       this.tail.next = newNode;
       this.tail =  newNode;
       this.length++;
       return this;
    }

    prepend(val){
        const newNode = new Node(val);
        this.head.prev = newNode;
        newNode.next= this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null)
        {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index,value)
    {
        if(index >= this.length)
        {
            return this.append(value);
        }
        else
        {
            const newNode = new Node(value);
            const leader = this.traverseToIndex(index-1);
            const follower = leader.next;
            leader.next = newNode;
            newNode.next=follower
            newNode.prev=newNode;
            this.length++;
            return this.printList();
        }
    }
    traverseToIndex(index)
    {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index)
        {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index)
    {
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        const follower = unwantedNode.next;
        follower.prev = leader;
        this.length--;
        return this.printList();
    }
}

const myLinkedlist = new DoublyLinkedlist(10);
myLinkedlist.append(5);
myLinkedlist.append(16);
myLinkedlist.prepend(1);
myLinkedlist.insert(1,99);
myLinkedlist.remove(1);
console.log(myLinkedlist);
console.log(myLinkedlist.printList());
