let arr = [5,7,8,9,4,3,2,1];
function  reversearr(arr,start,end){
    
    if(start  <= end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        reversearr(arr ,start +1 ,end -1);
    }
   

}
reversearr(arr,0,arr.length-1);