function recurringObject(array){
    let i=0,j=0,k,d;
    d=array.length;
    for(i=0;i<array.length;i++)
    {
        for(j=i+1;j<array.length;j++)
        {
            if(array[i]===array[j])
            {
                m=j-i;
                if(m<d)
                {
                    k=i;
                    d=m;
                }
            }
        }
    }
    console.log('First recurring element is'+" "+array[k]);
}

recurringObject([2,3,4,5]);