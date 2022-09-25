const strings = ['a','b','c','d']; //Uses 4*4=16bytes of storage

//push - to add items
strings.push('e');//O(1)

//pop - to remove last item
strings.pop('b');//O(1)

//Unshift - to add element at beginning
strings.unshift('f'); //O(n)

//Splice(n) -  to add and delete an element at nth index of array

strings.splice(2,0,'gain') //O(n)
console.log(strings); 