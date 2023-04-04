import React from 'react'
import { useState,useEffect } from 'react'

function Thirty_useEffect2(props) {

   
    useEffect(()=>{
        console.log('data is updated ' + props.data)
    },[props.data])


  return (
    <div>
          <h3>Hii the data is : {props.data}</h3>
        <h3>Hii the count is : {props.count}</h3>
    </div>
  )
}

export default Thirty_useEffect2