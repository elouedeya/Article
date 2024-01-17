import { useState } from "react"
const Counter = () => {

    let [count, setCount] = useState(0);
    const increment =()=>{
        setCount((prev)=>{
            console.log(prev)
            return count+1;
        })
    }
    
    return (
    <div>
      <h2>My count: {count}</h2>
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default Counter
