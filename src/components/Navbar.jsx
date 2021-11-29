import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "50%",
            margin: "auto",
        }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Navbar;