import React, { useState } from 'react';
import { createHash } from 'crypto';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: createHash('sha256').update(password).digest('hex') }),
        };
        
        fetch('https://www.davidzylin.com/api/read/login', requestOptions).then(res => res.json)
        .then(res => alert(res));
    };

    return (
        <div>
            <form onSubmit={onSubmit} id="login-form">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default Login;