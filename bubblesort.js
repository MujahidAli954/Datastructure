function bubblesort(array){
    for(let i=array.length; i>0;i--){
        for(let j=0; j<i-1;j++){
            if(array[j] > array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]];
            }
        }
    }
    return array;
}
const res=bubblesort([5,4,3,2,43,34,25,1,8,50,6,47,7]);
console.log(res);