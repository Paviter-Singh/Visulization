function quickdivide(arr,s,e){
    if(s>=e)return;
    let pi = quickSort(arr,s,e);
    quickdivide(arr,s,pi-1);
    quickdivide(arr,pi+1,e);

}
function quickSort(arr,s,e){
    let pivot = arr[e];
    let i = s;
    for(let j = s;j<e;j++){
        if(arr[j]<pivot){
            let t = arr[j];
            arr[j] = arr[i];
            arr[i] = t;
            i++;
        }
    }
    let t = arr[e];
    arr[e] = arr[i];
    arr[i] = t;
    return i;   
}