// src/SignUp.js

import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/userService';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate(); 
    const handleNavigation = () => {
        navigate('/signin'); // Navigate to the About page 
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const userData = { email, password, role };
        try {
            await registerUser(userData);
            setSuccess(true);
            setError(null);
            navigate('/signin');
        } catch (err) {
            setError('Registration failed. Please try again.');
            setSuccess(false);
        }
    };

    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form onSubmit={handleRegister}>
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
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="" disabled>
                        Select Role
                    </option>
                    <option value="college">College</option>
                    <option value="student">Student</option>
                    <option value="expert">Expert</option>
                    <option value="company">Company</option>
                </select>
                <button type="submit">Sign Up</button>
            </form>
            {success && <p>Registration successful! Redirecting to Sign In...</p>}
            {error && <p>{error}</p>}
            <p>Already have an account? <a onClick={handleNavigation}>Sign In</a></p>
        </div>
    );
}

export default SignUp;
