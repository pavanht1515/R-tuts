import React, { useState } from 'react'
import axios from 'axios'
import Get from './Get'

function Post(props) {

    const[name, setName] = useState("")
    const[email,setEmail] = useState("")
    const[mobile, setMobile] = useState("")

    function saveUser() 
    {

        let data = {name,email,mobile}
        
        // fetch("http://localhost:8000/posts",{
        //     method:"POST",
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(data)
        // }).then((result)=>{
        //     result.json().then((resp)=>{
        //         console.log(resp)
        //     })
        // })

        axios.post("http://localhost:8000/posts",data)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
        
    }

    return (
    <>

       <h3>POST API </h3><br/><br/>
        <input type='text'  value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
        <input type='text'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
        <input type='text'  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/><br/><br/>
        <button type="button" onClick={saveUser}>Click Here</button>         

        <Get g1={saveUser} />
           
    </>

  )
}

export default Post