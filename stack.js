
let data =  [];

let currentsize = data.length;

let maxsize = 6;
function push(newele){
    if(currentsize >= maxsize){
        console.log("WARNING");
    }
    else{
        data[currentsize] = newele;
        currentsize += 1;
        console.log(data);
    }
   
}

function pop(){

    if(currentsize > 0 ){
        currentsize -= 1;
        data.length = currentsize;
        console.log(data);
    }
else{
    console.log("Empty array");
}

}


push(3);
push(4);
push(5);
push(3);
pop();
pop();
pop();
pop();
push(8);
push(9);
push(3);
push(3);

