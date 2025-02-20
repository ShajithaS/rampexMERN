import { useMemo , useState} from "react";

function doublingUpNumber(num){
    return num*2;
}
function slowFunction(num){
    for(var i=0;i<100000000000;i++){
    }
    return num*2
}
const UseMemo =()=>{
    var[number,setNumber]=useState(0);
    var[theme,setTheme]=useState(false);
    var styling={
        backgroundColor: theme? "black":"white",
        color: theme? "white":"black"
    }
    return(
        <>
        <div style={styling}>
            <h1>This ist the example of useMemo</h1>
            Number box: {""}
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <h2>The number  is {number}</h2>
            <h2>the number is {slowFunction(number)}</h2>
            <button onClick={()=>setTheme(!theme)}>Toggle theme</button>
        </div>
        </>
    )
}
export default UseMemo;