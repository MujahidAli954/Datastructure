function factorial (item){
console.log(item);
    if(item ===  0){
        return 1;
    }
    return item * factorial(item -1);
}

let  res = factorial(5);
console.log(res);
