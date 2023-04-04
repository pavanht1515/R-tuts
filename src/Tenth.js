import React from 'react'
import { useState } from 'react'

function Twelth() {

    const[data, setData] = useState(0)

    function updateData()
    {
        console.log(data)
        setData(data+1)
        // console.log(data)
    }

    return (
    <div>
        <h3>{data}</h3>
        <button onClick={updateData}>Click Here</button>
    </div>
  )
}

export default Twelth