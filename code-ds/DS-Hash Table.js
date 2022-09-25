let user ={
    name:'Kylie',
    age:20,
    job:'SWE',
    magic:true,
    scream: function(){
        console.log('Ahhhh')
    }
};
user.spell = 'abra cadabra';//O(1)
console.log(user.name); //O(1)
console.log(user); 
