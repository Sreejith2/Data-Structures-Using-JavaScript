class Node{
    constructor(value)                    //joy
    {                                     //Mett
        this.value = value;               //Pavel
        this.next = null;                 //Samir
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
        this.array = [];
    }

    peek()
    {
        return this.first;
    }

    enqueue(value) //Add to queue
    {
        if(this.array.length==0)
        {
            this.first=value;
            this.last=value;
            this.array.push(value);
            this.length++;
            return this.array;
        }
        this.array.push(value);
        this.last=value;
        this.length++;
        return this.array;
    }

    dequeue() //To remove from queue
    {
            this.array.pop(0);
            this.first = this.array[0];
            this.length--;
            if(this.array.length==0)
            {
                this.first=null;
                this.last=null;
                return this.array;
            }
            this.last= this.array[this.array.length-1];
            return this.array;
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Mett');
myQueue.enqueue('Pavel');
// myQueue.dequeue();
// myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);