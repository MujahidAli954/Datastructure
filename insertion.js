
// function getsum(array) {
//     for(let i=0; i<array.length; i++) {
//         console.log(array[i]);
//     }
// }

// getsum([2,3,4,5,6,45]);

function insert(array){
    let i;
    let newele= 70;
    let position = 1;
    for(let i = array.length; i >= 0; i--){
        // console.log(array[i]);
        if(i >= position){
            array[i+1] = array[i];
            if(i == position){
                array[i] = newele;
            }
        }
    }
    array.length = array.length -1;
    console.log(array);
    
}

insert([1,2,3,4,5]);