// src/Profile.js

import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { getUserProfile, updateUserProfile } from '../../services/userService';
import ProfileHeader from './ProfileHeader/ProfileHeader';

function Profile() {
    const [email, setEmail] = useState('akash');
    const [role, setRole] = useState('college');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const coverPhoto = "https://images.shiksha.com/mediadata/images/1724403408php19ReYs.jpeg"; // Replace with actual URL or leave empty
    const profilePicture = "https://images.shiksha.com/mediadata/images/1610694069phpYY6cff.jpeg"; // Replace with actual URL or leave empty
    const name = "Chandigarh University";
    const friendsCount = "Best Private University in Punjab (India)";
    const NAACLogo = "https://puchd.ac.in/asset/logo/pu-naac-logo.png";

    useEffect(() => {
        async function fetchProfile() {
            try {
                const profile = await getUserProfile();
                setEmail(profile.email);
                setRole(profile.role);
            } catch (err) {
                setError('Failed to fetch profile.');
            }
        }
        fetchProfile();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const userData = { email, role };
        try {
            await updateUserProfile(userData);
            setSuccess(true);
            setError(null);
        } catch (err) {
            setError('Update failed. Please try again.');
            setSuccess(false);
        }
    };

    const handleNavigation = () => {
        navigate('/signin');
    };

    return (
        <div className="profile">

            <ProfileHeader
                coverPhoto={coverPhoto}
                profilePicture={profilePicture}
                name={name}
                friendsCount={friendsCount}
            />
            {/* <h1>Profile</h1>
            <form onSubmit={handleUpdate}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    readOnly
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
                <button type="submit">Update Profile</button>
            </form>
            {success && <p>Profile updated successfully!</p>}
            {error && <p>{error}</p>} */}
            {/* <p>Want to sign in with a different account? <a onClick={handleNavigation}>Sign In</a></p> */}
        </div>
    );
}

export default Profile;
