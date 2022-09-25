//Create a function to reverse a string
//'Hello World' should be
//'dlroW olleH'

function reverse(str){
    if(!str || str.length<2 || typeof str != 'string'){
        return 'Invalid input';
    }
    else{
        const backwards = [];
        const totalItems = str.length-1;
        for(let i=totalItems;i>=0;i--)
        {
            backwards.push(str[i]);
        }
        console.log(backwards);
        return backwards.join('');
    }
}
function reverse2(str){
    return str.split('').reverse().join('');
}
console.log(reverse2('Hello world'));