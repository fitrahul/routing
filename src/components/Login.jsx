import React, { useState } from 'react'
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const {token, handleToken} = useContext(AuthContext);
    return (
        <div style={{ marginTop: "20px" }}>
            <input type="text" placeholder="Username" onChange={(e) => {setName(e.target.value)}} />
            <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
            <button onClick={() => {
                fetch("https://reqres.in/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({email: name,password})
                }).then(d => d.json())
                .then((token) => {
                    // console.log(token);
                    handleToken(token);
                })
            }}>Log-in</button>
        </div>
    )
}

export default Login
