import React from 'react'
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import  Home  from './Home'
import About from './About'

function Route_1() {
    return (
        <div>
            React Router
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/home' element={<Home />} /> */}
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    {/* <Link to='/'>Home</Link>
                    <br />
                    <Link to='/about'>About</Link> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Route_1