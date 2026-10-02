import { useState } from "react";
import './count.css'

const Count = () => {
    const [count,setCount] = useState(0)
  return (
    <div className="count-box">
        <p id="para">hey i have been touched {count}</p>
        <button id="btn" onClick={() => {setCount(count + 1)}} >   click me </button>
        </div>

        
  )
}

export default Count