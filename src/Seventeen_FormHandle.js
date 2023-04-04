import React, { useState } from 'react'

function Seventeen_FormHandle() {
  
    const[name,setName] = useState("");
    const[select,setSelect] = useState(false);
    const[tnc,setTnc] = useState("");

  const handelInput = (e) =>
  {
    console.log(name, select, tnc)
    e.preventDefault();
  }

    return (
    <div>
        <form onSubmit={handelInput}> 
        <input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)} />
        <br/><br/>
        <select onChange={(e)=>setSelect(e.target.value)}>
            <option selected disabled>Choose any one</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
        <br/><br/>
        <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/> <span> Accept All Terms </span>
        <br/><br/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Seventeen_FormHandle