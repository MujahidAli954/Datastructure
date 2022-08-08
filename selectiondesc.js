
let data  = [4,600,100,5,6,7,8];

function desc(data){

    for(let i=0; i<data.length; i++){
        for(let j=i+1; j<data.length; j++){
            if(data[i]<data[j]){
                let temp = data[i];
                data[i] = data[j];
                data[j] = temp;
        }
    }

}
}

desc(data);
console.log(data);

