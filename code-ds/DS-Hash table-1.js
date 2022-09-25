class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i=0;i<key.length;i++)
        {
            hash = hash + (key.charCodeAt(i)*i)%this.data.length;
        }
        return hash;
    }

    set(key,value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address]=[];
            this.data[address].push([key,value]);
            console.log(this.data);
        }
        this.data[address].push([key,value]);
        console.log(this.data);
    }
    get(key){
        let address = this._hash(key);
        console.log(this.data[address]);
    }
}

const myHashTable = new HashTable(2);
//myHashTable.set('orange',100);
myHashTable.get('grapes');
