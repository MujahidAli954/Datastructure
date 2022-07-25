// arrray => [2,3,1,5,4]

let myarray = [2,3,1,5,4,9,12,7,6,8];
let i = 0;
let j = 1;
let newarray = [];

function isSorted(array)
{
    for(let i=0; i<array.length; i++){
        if(array[i] > array[i+1]){
            return false;
        }
    }
    return true;
}

function  sorting(array){
    if(isSorted(array))
    {
        newarray = array;
        return;
    }
    else if(array[i] < array[j]){
        i++;
        j++;
        sorting(array);
    }
    else{
        [array[i],array[j]]=[array[j],array[i]];
        i=0;
        j=1;
        sorting(array);
    }
}

 sorting(myarray);
console.log(newarray);