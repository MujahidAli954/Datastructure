
function  searching(array){

    let item = 80;
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
    if(array[i] == item){
        return i;
    }
}
console.log();

}

const res = searching([20,40,30,60,90,80]);
console.log(res);

