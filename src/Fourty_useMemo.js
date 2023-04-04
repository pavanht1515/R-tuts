import React, { useMemo, useState } from 'react'

function Fourty_useMemo() {
  
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(1);

//   function multipleCount(){
//     console.log('function is called')
//     return 2*2;
//   }

const multipleCountUsingMemo = useMemo (function multipleCount(){
    console.log('function is called')
    return count*count;
  },[item]
)

    return (
    <div>
        <h3>Count : {count}</h3>
        <h3>Item : {item}</h3>
        <h3>Multiple Count : {multipleCountUsingMemo}</h3>
        <button onClick={()=>setCount(count+1)}>Update Count</button> &nbsp;
        <button onClick={()=>setItem(item*10)}>Update Item</button>

    </div>
  );
}

export default Fourty_useMemo