import React, { useEffect } from 'react'
import { useState } from 'react'
function HooksEx() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        setCount(count+0)
        console.log({count})
    })
  return (
    <div>
         {count}
         <br/>
         <button onClick={()=>{setCount(count+1)}}>ClickMe </button>
    </div>
  )
}
export default HooksEx