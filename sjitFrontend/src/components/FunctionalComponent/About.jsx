import { useState } from "react";
//this page is the demo of useState
function About(){
    var statevar=0;
    var [num,setNum]= useState(statevar)
    /* */ 
    function handleDecrement(){
        setNum(num-1);
    }
    var styling={
        textAlign:"center",
        backgroundColor:"blue",
        color:"white",
    }

    return(
        <div>
            <h2 style={styling}>About Us</h2>
            <h3>This is initial state variable:{statevar}</h3>
            <button onClick={handleDecrement}>-</button>
            <h3>Updating state variable:{num}</h3>
            <button onClick={()=>setNum(num+1)}>+</button>
            <h3>Click here to reset</h3>
            <button onDoubleClick={()=>setNum(0)}>Reset</button>
        </div>
    );
}

export default About;
