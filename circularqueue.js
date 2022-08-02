

class CircularQueue{

    constructor(size){
        this.max = size;
        this.items = new Array(size);
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }

    enque(val){
        if(this.currentSize != this.max){
            if(this.rear ==this.max -1){
                this.rear = 0;
            }
            else{
                this.rear++;
            }
            this.items[this.rear] = val;
            this.currentSize++;
            if((this.front == -1)){
                this.front = this.rear;
            }
        }
    }
    deque(){
        if(this.currentSize !=0){
            this.items[this.front] = null;
            if(this.currentSize == this.max-1){
                this.front = 0;
            }else{
                this.front++;
            }
            this.currentSize--;
        }
        else{
            this.front =-1;
            this.rear = -1;
            console.log("queue is empty");
        }
        
    }


}

let circular = new CircularQueue(5);

circular.enque(40);
circular.enque(50);
circular.enque(60);
circular.enque(70);
circular.deque();
console.log(circular)

