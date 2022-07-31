// const {generateArr} = require("./helpers");
function generateArr(n,height){
    let narr =  Array.from({length: n}, () => {return Math.floor(Math.random() * height)});
    return narr;
  }
const mergeSort = (arr,s,e)=>{
if(s>=e)return ;
let mid = Math.floor((s+e)/2);
mergeSort(arr,s,mid);
mergeSort(arr,mid+1,e);
merge(arr,s,mid,e);
}
function merge(arr,s,mid,e){
    let larr = [];
    let rarr = [];
    
    for(let i=s;i<=mid;i++){
        larr.push(arr[i]);
    }
    for(let i=mid+1;i<=e;i++){
        rarr.push(arr[i]); }
    
    let l =0,r=0;
    while(l<larr.length && r<rarr.length){
            if(larr[l]<=rarr[r]){
                arr[s++] = larr[l];
               
                l+=1;
            }
            else{
                // ans.push(rarr[r])
                arr[s++] = rarr[r];
                // console.log("rarr is smalelr "+larr[r])
                r+=1;
            }
    }

    while(l<larr.length)arr[s++] = larr[l++];

    while(r<rarr.length)arr[s++] = rarr[r++];
    // console.log(larr+" - "+rarr);
       
}
function quickdivide(arr,s,e){
    if(s<=e)return;
    let mid = Math.floor((s+e)/2);

}
function quickSort(arr,s,mid,e){
    
}
let arr = generateArr(200,1000)
console.log(arr);
// mergeSort(arr,0,arr.length-1);
console.log(arr);
// export {mergeSort};