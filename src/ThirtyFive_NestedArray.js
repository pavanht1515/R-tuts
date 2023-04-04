import React from 'react'

function ThirtyFive_NestedArray() {

    const data = [
        { name: "a1", email: "a1@g.com", address: [{ area: "kharadi", city: "mumbai", state: "MH" }] },
        { name: "b1", email: "b1@g.com", address: [{ area: "hadapsar", city: "pune", state: "MH" }] },
        { name: "c1", email: "c1@g.com", address: [{ area: "pimpri", city: "thane", state: "MH" }] },
        { name: "d1", email: "d1@g.com", address: [{ area: "pimpri", city: "thane", state: "MH" }] }
    ]

    return (


        <div>
            <table border='1'>
                <tbody>
                    <tr>
                        <td>S.No</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                    {
                        data.map((item,i) =>

                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <table border='2'>
                                        <tbody>
                                        {item.address.map((item2,j) =>
                                            <tr key={j}>
                                                {/* <td>{j}</td> */}
                                                <td>{item2.area}</td>
                                                <td>{item2.city}</td>
                                                <td>{item2.state}</td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                        )
                    }
                     </tbody>
        </table>
                </div>
           
    )
}

export default ThirtyFive_NestedArray