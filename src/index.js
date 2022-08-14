// import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import BubbleSort from './algorithms/bubbleSort';
import MergeSort from './algorithms/mergeSort';
import Navbar from './Navbar';
import { generateArr } from './algorithms/helpers';
// function debounce(callback, time){
//   let t;
//   clearTimeout(t);
//   t = setTimeout(()=>callback,time)
//   return callback;
// }
let debounce = (callback,delay = 500)=>{
  let t;
  return ()=>{
    clearTimeout(t);
        t = setTimeout(callback,delay);
    }
}
// let fun = debounce(callback,1000);
const App = ()=>{
  const [iarr,setIarr] = React.useState([]);
  const [sleep,setSleep] = React.useState(100); 
  React.useEffect(()=>{
    setIarr([...generateArr(205,680)])
    
  },[]);
  const callback = (e)=>{
    // console.log("callback is called")
    setSleep(e.target.value);
  }
  const handlesleep = (e)=>{
      
      debounce(()=>{return callback(e)},200)()

  }
    return (<div>
      <Navbar sleep={handlesleep}/>
      {/* {console.log("render index.js",iarr)} */}
      <MergeSort iarr={iarr} sleep={1000}/>
</div>);
};

ReactDOM.render(<App/>,document.querySelector('#root'));