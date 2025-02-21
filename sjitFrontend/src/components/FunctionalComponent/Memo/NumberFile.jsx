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
      <h3>The number is:{number}</h3>
    </div>
  )
}

export default NumberFile