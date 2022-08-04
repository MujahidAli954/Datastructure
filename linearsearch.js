
let data = [3,50,60,5,4,9,12,7];

let find  = 60;

let num = undefined;
function linear(){
for(let i = 0; i < data.length; i++){

    if(data[i] == find){
        console.log(i);
        // console.log(num);
        break;
    }
    else{
        console.log("element not found");
    }

}
// console.log(num);
}

linear();