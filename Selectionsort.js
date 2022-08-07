let min;
let data = [40,30,4,1,5,80,90];
function selectionsort(data){

    for(let i=0;i<data.length;i++){
        min = i;
        for(let j=i+1;j<data.length;j++){
            if(data[j]< data[min]){
                min = j;
            }
        }
        let temp = data[min];
        data[min] = data[i];
        data[i] = temp;
    }

}

selectionsort(data);
console.log(data);