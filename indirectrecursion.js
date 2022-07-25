let app = 0;
let money = 100;
function  apple(x){
    if(x > 0){
console.log("apple"  ,x ,  "apple", app )  ;
buymore(x)
}
else{
    console.log("dont have any apple");
}
    
}



function buymore(x){
    app++;
    apple(x -10);
    

}

apple(money);

