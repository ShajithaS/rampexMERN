import { useState } from "react"
const NumberFile = () => {
    var[number,setNumber]=useState(0)
  return (
    <div>
        <h2>This is Number box</h2>
        <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>this is number:{number}</p>
    </div>
  )
}

export default NumberFile