import React from "react";


function Rect(props){
    
    return (<span key={props.id} className="rect" style={{height: props.height,backgroundColor:props.color?props.color:"black" }}>

    </span>);
}
export default Rect;