function Arraysort(arr1){
    for(let i = 0; i < arr1.length; i++){

        for(let j=0; j<arr1.length; j++){

            if(arr1[j] >  arr1[j+1]){
                let temp = arr1[j];
                arr1[j] = arr1[j+1];
                arr1[j+1] = temp;
            }
        }
    }
    console.log(arr1);

}
let res = Arraysort([8,76,65,43,32,22,2,1,58]);
console.log(res);
