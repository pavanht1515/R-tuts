import React from 'react'
import { useState } from 'react'


function Sixteen() {

const [state, setState] = useState(true)
    return (
    <div>
        {
            state ?<h4> hii </h4> : null
        }
        {/* <button onClick={()=>setState(true)}>Show</button>
        <button onClick={()=>setState(false)}>Hide</button> */}
        <button onClick={()=> setState(!state)}>Toggle</button>
    </div>
  )
}

export default Sixteen