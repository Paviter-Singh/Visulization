import React from "react";

function Navbar(props){
    return (<div className="navbar">
        <input onChange={props.sleep}  type="range" id="sleep" name="sleep" min="0" max="500"/>
    </div>);
}
export default Navbar;