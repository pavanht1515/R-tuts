import React, { useState } from 'react'

function Ninteen_ForrmValidation() {

    const [name,setName] = useState('');
    const [pass,setPass] = useState('');

    function handelInput(e)
    {   
        console.log(name,pass);
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handelInput}>
            <input type='text' placeholder='Enter name' onChange={handelInput}></input>
            <br/><br/>
            <input type='password' onChange={handelInput}></input>
            <br/><br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Ninteen_ForrmValidation