class link{
    constructor(data){
        this.head ={
            value: data,
            next: null
        };
        this.tail= this.head;
    }
    appendNode(newNode){
        let node = {
            value:newNode,
            next:null
        };
        this.tail.next = node;
        this.tail = node;
    }
}

let linked = new link(200);
linked.appendNode(300);
console.log(linked);