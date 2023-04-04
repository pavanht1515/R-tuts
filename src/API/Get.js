import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post'

function Get(props) {

    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [userid, setuserId] = useState(null)

    useEffect(() => {
        getList()
    }, [])

    function getList() {
        fetch("http://localhost:8000/posts").then((result) => {
            result.json().then((resp) => {
                setData(resp)
                // console.log(resp)
                // setName(resp[0].name)
                // setEmail(resp[0].email)
                // setMobile(resp[0].mobile)
            })
        })
    }

    function selectUser(kid) {
        setName(data[kid - 1].name)
        setEmail(data[kid - 1].email)
        setMobile(data[kid - 1].mobile)
        setuserId(data[kid - 1].id)
    }

    function updateUser() {
        let item = { name, mobile, email }
        console.warn("item", item)
        fetch(`http://localhost:8000/posts/${userid}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getList()
            })
        })

    }

    function DeleteUser(eid) {
        // fetch(`http://localhost:8000/posts/${id}`, {
        //     method: 'DELETE'
        // }).then((result) => {
        //     result.json().then((resp) => {
        //         console.log(resp)
        //         getList()
        //     })
        // })
        axios.delete(`http://localhost:8000/posts/${eid}`)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
        getList()

    }

    return (
        <div>
            <center>GET API</center>
            <center><br />
                <table border='1'>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Contact</td>
                            <td colSpan='4'>Actions</td>
                        </tr>
                        {
                            data.map((item, i) =>
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    {/* <td><button onClick={<Get />}>ADD</button></td> */}
                                    <td><button onClick={() => { DeleteUser(item.id) }}>DELETE</button></td>
                                    <td><button onClick={() => { selectUser(item.id) }}>UPDATE</button></td>
                                    <td><button>VIEW</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <br /><br /><br /><br />
                <div>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /><br /><br />
                    <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
                    <input type='text' value={mobile} onChange={(e) => { setMobile(e.target.value) }} /><br /><br />
                    <button onClick={updateUser}>Update</button>
                </div>
            </center>
            {/* <Post f1={getList} /> */}
        </div>
    )
}

export default Get