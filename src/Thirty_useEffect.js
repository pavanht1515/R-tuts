import React, { useEffect, useState } from 'react'
import Thirty_useEffect2 from './Thirty_useEffect2'

function Thirty_useEffect() {
  
    const[data, setData] = useState(100)
    const[count, setCount] = useState(1)
  

    return (
    <div>
       <Thirty_useEffect2 data = {data} count = {count} />
        <button onClick={()=> setData(data+10)}>For Data!</button> &nbsp;
        <button onClick={()=> setCount(count+1)}>For Count!</button>
    </div>
  )
}

export default Thirty_useEffect