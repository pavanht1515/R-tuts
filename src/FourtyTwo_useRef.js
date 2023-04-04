import React, { useRef } from 'react'

function FourtyTwo_useRef() {

    const inputref=useRef(null);

    function handelref()
    {
        inputref.current.style.backgroundColor='red'
    }
    return (
    <div>
        <input type='text' ref={inputref}/>
        <button onClick={handelref}> Click Here</button> 
    </div>
  )
}

export default FourtyTwo_useRef