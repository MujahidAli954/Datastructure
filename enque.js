
let data = [];

let currentsize = data.length;

let maxsize = 6;

function enque(newele){
    if(currentsize >= maxsize){
        console.log('enqueing');
    }
    else{
        data[currentsize] = newele;
        currentsize++;
        // console.log(data);
    }
  
}

function deque(){
    for(let i = 0; i < data.length; i++){
        data[i] = data[i + 1];
        // console.log(data);
    }
    currentsize--;
    data.length = currentsize;
    console.log(data);
}

enque(5);
enque(56);
enque(96);
enque(46);
enque(6);
enque(4);
enque(2);
deque();
deque();
deque();
deque();
deque();
deque();