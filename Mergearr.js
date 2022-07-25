function merge(arr1,arr2){

    
    let arr3 = [];
    let i = 0;
    let j = 0;
    let m = 0;
    while(i< arr1.length && j<arr2.length)
    {
        
        if(arr1[i] < arr2[j]){
            arr3[m] = arr1[i];
            i++;
        }
        else{
            arr3[m] = arr2[j];
            j++;
            // console.warn(arr3[m]);
        }
        m++;
    } 
    while(i<arr1.length){
        arr3[m] = arr1[i];
            i++;
            m++;
    }
    
}
let res = merge([1,2,3,4,5,6,7,8,10,50,90],[9,60,70,80]);
console.log(res);