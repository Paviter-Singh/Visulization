import Rect from "../rect";
import React from "react";
import { sleep, generateArr, swap } from "./helpers";


const BubbleSort = (props) => {
   
  const [arr, setArr] = React.useState([]);
  React.useEffect(() => {   
 bubble(props.iarr);
  }, [props.iarr]);
 
  async function bubble(arr) {
    
    let n = arr.length;
    for (let i=0; i < n; i++) {
      for (let j = 1; j < n; j++) {
        if (arr[j].value < arr[j - 1].value) {
          arr[j].color = "red";
          arr[j - 1].color = "green";
          // console.log(props.sleep)
          if(!props.sleep<=0){
          await sleep(props.sleep);}
          setArr([...arr]);
          swap(arr, j, j - 1);
          arr[j].color = undefined;
          arr[j - 1].color = undefined;
           
        }
      }
    }
    
    setArr([...arr]);
   
  }
  return (
    <div>
        {/* {console.log(props.sleep)} */}
      {arr.map((e, index) => {
        return <Rect height={e.value} id={index} color={e.color} />;
      })}
    </div>
  );
};

export default BubbleSort;