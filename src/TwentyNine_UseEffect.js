import React from 'react'
import { useEffect,useState } from 'react'

function TwentyNine_UseEffect() {


    const [name, setName] = useState("anil");

    useEffect(()=>{
        console.log('Use Effect is called')
    })

  return (
    <div>
        <h3> Hello from {name} </h3>
        <button onClick={()=> setName("Pavan")}>Click here!</button>
    </div>
  )
}

export default TwentyNine_UseEffect