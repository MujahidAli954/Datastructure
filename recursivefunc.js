
 let counter = 1;
function recursive(number){

    if(counter > number)
    {
        return
    }
    console.log('hello world',+ counter);
    counter++;
    recursive(number);
}

recursive(10);