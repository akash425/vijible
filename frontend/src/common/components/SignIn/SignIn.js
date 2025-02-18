// src/SignIn.js

import React, { useState, useEffect } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/userService';


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/profile');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        try {
            const response = await loginUser(userData);
            setError(null);
            if (response.success && response.token) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify({
                    email: response.user.email,
                }));
                localStorage.setItem('isAuthenticated', 'true');
                navigate('/profile');
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
                Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button>
            </p>
        </div>
    );
}

export default SignIn;
