import React from 'react'

function ThirtyThree_ArrayListMap() {

    // const data = ['a1', 'b1', 'c1', 'd1'];

    const data = [
        { name: "a1", email: "a1@g.com", contact: 123 },
        { name: "b1", email: "b1@g.com", contact: 123 },
        { name: "c1", email: "c1@g.com", contact: 123 },
    ]

    return (
        <div>
            <table border='1'>
            <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
            </tr>
            {
                data.map((element) =>  (            
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.contact}</td>
                    </tr>
                )
                )
            }
            </table>
        </div>
    )
}

export default ThirtyThree_ArrayListMap