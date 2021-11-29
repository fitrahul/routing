import React, { useState, useEffect } from 'react';
import { useParams,Redirect } from "react-router-dom";
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../context/AuthContext';

function UserDetail() {
    const {token} = useContext(AuthContext)
    const { id } = useParams()
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })

    }, [id]);
    if (!token) {
        return <Redirect to="/login" />
    }
    // else {
    //     return <Redirect to="/users" />
    // }

    return (
    <div>
        <img src={user.avatar} alt="tst" />
        <h3>{user.first_name} {user.last_name}</h3>
        <h3>{user.email}</h3>
    </div>
)  
}
export default UserDetail