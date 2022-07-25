
function Delete(array) {

let position = 3;
for(let i = position; i <=array.length-1; i++){
    console.warn(array[i]);
    array[i] = array[i+1];
}
array.length = array.length-1;
console.warn(array)

}

Delete([20,40,50,30,90,80]);