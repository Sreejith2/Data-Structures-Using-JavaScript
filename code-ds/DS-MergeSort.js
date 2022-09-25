function merge(array1,array2)
{
    const mergedArray = [];
    let array1item = array1[0];
    let array2item = array2[0];
    let i=1;
    let j=1;

    if(array1.length===0){
        return array2;
    }
    else if(array2.length===0){
        return array1;
    }
    while(array1item || array2item){
        if(array1item<array2item){
            mergedArray.push(array1item);
            array1item = array1[i];
            i++;
        }
        else{
            mergedArray.push(array2item);
            array2item = array2[j];
            j++;
        }
    }

    return mergedArray;
}

console.log(merge([2,4,6,8],[3,5,7,9]));