function findodd(array){
    let result = [];
    function helperrecursive(inputArray){
        if(inputArray.length === 0)
        {
            return;
        }
         if(inputArray[0] % 2 !== 0)
         {
            result.push(inputArray[0]);
        }
        helperrecursive(inputArray.slice(1));
    }
    helperrecursive(array);
    return result;
}
const res = findodd([1,2,3,4,5,6,7,8,9,10]);
console.log(res);

