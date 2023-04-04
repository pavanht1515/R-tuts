import React from 'react'

function Fourteen(props) {
  return (
    <div>
        <h3>Students {props.name}{props.email}{props.others.contact}</h3>
    </div>
  )
}

export default Fourteen