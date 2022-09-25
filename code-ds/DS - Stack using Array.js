class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
      this.array= [];
    }

    peek() // Shows top node
    {
        return this.array[this.array.length-1];
    }

    push(value) //Insert element to top
    {
        this.array.push(value); 
        return this;
    }

    pop() //Take an element from the top
    {
        this.array.pop();
        return this;
    }
}

const newStack = new Stack();
newStack.push('Google');
newStack.push('Udemy');
newStack.push('Discord');
// newStack.pop();
// newStack.pop();
// newStack.pop();
console.log(newStack.pop());