let data  = [];
let currentsize = data.length;

function push(newele){
    data[currentsize] = newele;
    currentsize+=1;
    // console.log(data);
}

function pop(){
   lastitem = data[currentsize -1];
   currentsize -= 1;
   data.length = currentsize;
   return lastitem;
}

function reverseStr(item){
    for(let i= 0; i<item.length; i++){
        push(item[i]);
    } 
    for(let i= 0; i< item.length; i++){
        // console.log(pop());
        item[i]=pop();
    }
}

let str = "anil";
str = str.split("");
reverseStr(str);

console.log(str.join(""));


