import React from 'react';
import './SignUp.css';

function SignUp() {
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                {/* <input>
                    <select>
                        <option value="College">College</option>
                        <option value="Students">Students</option>
                    </select>
                </input> */}
                <button type="submit">Sign Up</button>
            </form>
            {/* <p>Already have an account? <a>Sign In</a></p> */}
        </div>
    );
}

export default SignUp;