// const {generateArr} = require("./helpers");
import Rect from "../rect";
import React from "react";
import { sleep } from "./helpers";


const MergeSort = (props) => {
   
  const [arr, setArr] = React.useState([]);
  React.useEffect(() => {   
    // console.log(props.iarr," and the length",props.iarr.length-1);
    let new_arr = [];
    setArr(props.iarr)
    props.iarr.forEach((e)=>new_arr.push({...e}))
    let p = mergeSort(new_arr,0,props.iarr.length-1);
    console.log(props.iarr)
    console.log(new_arr)
    p.then(()=>{setArr(new_arr)})
  }, [props.iarr]);
  const mergeSort = async (arr,s,e)=>{
    if(s>=e)return ;
    let mid = Math.floor((s+e)/2);
    await mergeSort(arr,s,mid);
    await mergeSort(arr,mid+1,e);
    await merge(arr,s,mid,e);
    }
    async function merge(arr,s,mid,e){
        let larr = [];
        let rarr = [];
        let start = s;
        for(let i=s;i<=mid;i++){
            larr.push(arr[i].value);
        }
        for(let i=mid+1;i<=e;i++){
            rarr.push(arr[i].value); }
        for(let i=s;i<=e;i++){
          arr[i].color = 'green'
        }  
        setArr([...arr])
        await sleep(10)
        
        // await sleep(props.sleep);}
        let l =0,r=0;
        while(l<larr.length && r<rarr.length){
                if(larr[l]<=rarr[r]){
                    arr[s++].value = larr[l];
                   
                    l+=1;
                }
                else{
                    // ans.push(rarr[r])
                    arr[s++].value = rarr[r];
                    // console.log("rarr is smalelr "+larr[r])
                    r+=1;
                }
        }
    
        while(l<larr.length)arr[s++].value = larr[l++];
    
        while(r<rarr.length)arr[s++].value = rarr[r++];
        // console.log(larr+" - "+rarr);
        for(let i=s=start;i<=e;i++){
          arr[i].color = undefined
        }   
    }
  return (
    <div>
        {/* {console.log(props.sleep)} */}
      {arr.map((e, index) => {
        return <Rect height={e.value} key={index} color={e.color} />;
      })}
    </div>
  );
};




function isSort(arr){
    let n = arr.length;
    for(let l=1;l<n;l++){
        if(arr[l]<arr[l-1])return false;
    }
    return true;
}

export default MergeSort