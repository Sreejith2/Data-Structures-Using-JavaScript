class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() // Shows top node
    {
        return this.top;
    }

    push(value) //Insert element to top
    {
        if(this.length==0){
            const newNode = new Node(value);
            this.top = newNode;
            this.bottom = newNode;
        }
        else{
            const newNode = new Node(value);
            const holdingPointer = this.top;
            this.top =newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() //Take an element from the top
    {
        if(!this.top)
        {
            return null;
        }
        else{
            const holdingPointer=this.top;
            this.top=this.top.next;
            this.length--;
            return holdingPointer;
        }
    }
}

const newStack = new Stack();
newStack.push('Google');
newStack.push('Udemy');
newStack.push('Discord');
newStack.pop();
newStack.pop();
newStack.pop();
console.log(newStack.pop());