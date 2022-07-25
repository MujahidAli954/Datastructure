// checking sum zero 
// [-5,-4,-3,-2,0,2,4,,6,8]
//output [-4,4]

function findsumzero(array){
    let left = 0;
    let right  = array.length - 1;
    while(left < right){
        sum = array[left] + array[right];
        if(sum === 0 ){
            return [array[left],array[right]];
        }else if (sum > 0){
            right--;
        }else{
            left++;
        }
    }
}
const result = findsumzero([-5,-4,-3,-2,0,2,4,6,8]); // linear solution & linear time complexity
console.log(result);


// function findsumzero(array)
// {
//     for(let number of array){
//         console.log('outerloop');
//         for(let i=1; i<=array.length; i++){
//             console.log('innerloop');
//             if(number + array[i] === 0)
//             {
//                 return [number ,array[i]];
//             }
//         }
//     }
// }
// const result = findsumzero([-5,-4,-3,-2,0,2,4,6,8]);
// console.log(result);

// (o^2)quadtratic time complexity solution


 