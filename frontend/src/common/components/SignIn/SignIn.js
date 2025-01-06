// src/SignIn.js

import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/userService';


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        try {
            const response = await loginUser(userData);
            setError(null);
            if (response.success && response.token) {
                console.log("response $$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log(response);
                localStorage.setItem('token', response.token);
                navigate('/'); // Navigate to the desired page after successful sign-in
            } else {
                setError('Sign-in failed. Please check your credentials.');
            }
        } catch (err) {
            setError('Sign-in failed. Please try again.');
        }
    };

    return (
        <div className="signin">
            <h1>Sign In</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign In</button>
            </form>
            {error && <p>{error}</p>}
            <p>
                Don't have an account? <a href="#signup">Sign Up</a>
            </p>
        </div>
    );
}

export default SignIn;
