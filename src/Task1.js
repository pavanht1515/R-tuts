/* eslint-disable */
import React, { useState } from 'react'
import { cilList } from '@coreui/icons';

function Task1() {
    const [input, setInput] = useState(0);
    const [print, setPrint] = useState(false);

    function handelInput (e)
    {
        let hold1 = e.target.value;
        setInput(hold1);
        console.log(hold1)
        // setPrint(false);
    }



  return (
    <div>
        <br/><br/>
        <label>Enter any Number</label><br/><br/>
        {
            print ? input.map(<h3>return(
              {
                        (
                            <center>
                                    id: {input}
                            </center>
                        )
                        })
                </h3> )
                : null
        }

        <input type="text" onChange={handelInput}></input>
        <button onClick={()=>setPrint(true)}>Click Here</button>
        
    </div> 
  )
}

export default Task1