import React from 'react'

function ThirtyThree_2() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div>
      {
        numbers.map((num,i) =>
          <div key={i}>
            <div>
            <h2>value : {num} , id :{i}</h2>
          </div>
          {/* <div>
            <h6>Id : {num}</h6>
            </div> */}
          </div>
        )
      }
    </div>
  )
}

export default ThirtyThree_2