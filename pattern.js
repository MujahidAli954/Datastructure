
function pattern1(n){
    for(let row = 1; row <= n; row++){
        for(let col=1; col<=row; col++){
            console.log('*');
        }
        console.log("\n");
    } 
}


let test = pattern1(5);
console.log(test);