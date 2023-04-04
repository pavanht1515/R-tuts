import {useState} from 'react'

function Fifteen() {
  
    const [data,setData] = useState("");
    const [print,setPrint] = useState(false);

  function getData(e)
  {
    console.log(e.target.value)
    setData(e.target.value)
    // setPrint(false)          //if we changed the value after the button is clicked so display will stop util button is pressed again 
  }

    return (
    <div>
        {
            print ? <h4>{data}</h4> : null
        }
        <input type="text" onChange={getData}></input>
        <button onClick={()=> setPrint(true)}>Click Here</button>
    </div>
  )
}

export default Fifteen