import React from 'react'
import ThirtySix_ReuseComponent2 from './ThirtySix_ReuseComponent2'

function ThirtySix_ReuseComponent() {
    const data = [
        { name: "a1", email: "a1@g.com", contact: 123 },
        { name: "b1", email: "b1@g.com", contact: 123 },
        { name: "c1", email: "c1@g.com", contact: 123 },
    ]
  return (
    <div>
      
       {
        data.map((item,i)=>
        <ThirtySix_ReuseComponent2 element={item} />
        )
       }
    </div>
  )
}

export default ThirtySix_ReuseComponent