import React from 'react';
import './SignIn.css';

function SignIn() {
    return (
        <div className="signin">
            <h1>Sign In</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
        </div>
    );
}