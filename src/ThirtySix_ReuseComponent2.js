import React from 'react'
// import ThirtySix_ReuseComponent from './ThirtySix_ResueComponent'

function ThirtySix_ReuseComponent2(props) {
  return (
    <div>
      <span>{props.element.name}</span>
      <span>{props.element.email}</span>
      <span>{props.element.contact}</span>
    </div>
  )
}

export default ThirtySix_ReuseComponent2