
let data  = [4,5,6,7,8,9,10,11,12,13,14,15];

let start  = 0;
let end = data.length -1;
let find = 12;
let pos = undefined;

while (start <= end) {
    let mid = Math.floor((start + end)/2);
    console.log(mid);
    if(data[mid] == find){
        pos = mid;
        break;
    }
    else if(data[mid] < find){
        start = mid + 1;
    }
    else{
        end = mid - 1;
    }
}
console.log(pos);