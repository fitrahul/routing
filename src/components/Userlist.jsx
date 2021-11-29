import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Userlist() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://reqres.in/api/users`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })

    }, []);

    return (
        <div>
            {/* {[1,2,3,4].map(e => (<p>User: {e}</p>))} */}
            {users.map((e) => (<p>
                <Link to={`/user/${e.id}`}>User: {e.first_name}</Link>
            </p>))}
        </div>
    )
}

export default Userlist