//[1,2,3,4,3,5,4,6,7,8]
//count largest sum of consecutive numbers
//num 4
// sum =>25

function findlargestsum(array,num){
    if(num>array){
        throw new Error('number is greater than array');
    }else{
        let max = 0;
        for(let i = 0; i<array.length  - num +1;i++){
            // console.log('i =', i );
            let temp = 0;
            for(let j=0; j<num; j++)
            {
                // console.log('j=',j);
                temp += array[i + j];
            }
            if(temp>max)
            {
                max = temp;
            }
        }
        return max;
    }
}

const findsum = findlargestsum([1,2,3,4,3,4,5,6,7,8],4);
console.log(findsum);