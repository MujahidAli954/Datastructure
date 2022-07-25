
// array [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// 

function findmdindex(array,num){
    let min = 0;
    let max = array.length -1;
    while(min<=max){
        let midindex = Math.floor((min + max)/2);
        if(array[midindex] < num){
            min = midindex +1;
        }
        else if(array[midindex]>num)
        {
            max = midindex -1;
        }
        else{
            return midindex;
        }
    }
    return -1;
}
const binaryalgo = findmdindex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],10);
console.log(binaryalgo);