//Reference type
var object1 = {value : 10};
var object2 = object1;
var object3 = {value:10};

//Context vs scope
function b(){
    let a=4;
}

// const object4 = {
//     a:function (){
//     console.log(this);
//     }
// }
// console.log(this===window);

//Instantiation
class Player{
    constructor(name,type){
        this.name = name;
        this.type=type;
    }
    introduce(){
        console.log(`Hi iam ${this.name} and ${this.type}`);
    }
}

class wizard extends Player{
    constructor(name,type){
        super(name,type)
    }
    play(){
        console.log(`Wheee iam ${this.type}`);
    }
}

const wizard1 = new wizard('shelly','Healer'); 
const wizard2 = new wizard('shawn','Dark magic');

wizard1.introduce()
wizard2.play()