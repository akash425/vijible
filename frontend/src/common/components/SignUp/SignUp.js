import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/userService';

function SignUp() {
    const [role, setRole] = useState('');
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
        setFormData({}); // Reset form data when switching roles
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        const { confirmPassword, ...userData } = { role, ...formData };

        try {
            await registerUser(userData);
            setSuccess(true);
            setError(null);
            navigate('/signin');
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    function AddressFields({ formData, handleInputChange }) {
        return (
            <>
                <input
                    type="text"
                    name="streetAddress"
                    placeholder="Street Address"
                    value={formData.streetAddress || ''}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city || ''}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state || ''}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={formData.pincode || ''}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="landmark"
                    placeholder="Landmark (optional)"
                    value={formData.landmark || ''}
                    onChange={handleInputChange}
                />
            </>
        );
    }


    const renderForm = () => {
        switch (role) {
            case 'college':
                return (
                    <>
                        <input
                            type="text"
                            name="collegeName"
                            placeholder="College Name"
                            value={formData.collegeName || ''}
                            onChange={handleInputChange}
                            required
                        />
                        {/* <input
                            type="text"
                            name="collegeAddress"
                            placeholder="College Address"
                            value={formData.collegeAddress || ''}
                            onChange={handleInputChange}
                            required
                        /> */}
                        <AddressFields formData={formData} handleInputChange={handleInputChange} />

                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Phone Number"
                            value={formData.mobile || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </>
                );
            case 'student':
                return (
                    <>
                        <input
                            type="text"
                            name="studentName"
                            placeholder="Student Name"
                            value={formData.studentName || ''}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="collegeAddress"
                            placeholder="College Name"
                            value={formData.collegeAddress || ''}
                            onChange={handleInputChange}
                            required
                        />
                        {/* <AddressFields formData={formData} handleInputChange={handleInputChange} /> */}

                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Phone Number"
                            value={formData.mobile || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </>
                );
            case 'expert':
                return (
                    <>
                        <input
                            type="text"
                            name="expertName"
                            placeholder="Expert Name"
                            value={formData.expertName || ''}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="orgName"
                            placeholder="Organization Name"
                            value={formData.orgName || ''}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="designation"
                            placeholder="Designation"
                            value={formData.designation || ''}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Contact Number"
                            value={formData.mobile || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="signup">
            {!role ? (
                <div className="role-selection">
                    <h2>Select Your Role</h2>
                    <div className="role-buttons">
                        {['college', 'student', 'expert'].map((role) => (
                            <button
                                key={role}
                                onClick={() => handleRoleSelection(role)}
                                className={`role-button ${role}`}
                            >
                                {role.charAt(0).toUpperCase() + role.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="form-container">
                    <h1>Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}</h1>
                    <form onSubmit={handleRegister}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email || ''}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password || ''}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword || ''}
                            onChange={handleInputChange}
                            required
                        />
                        {renderForm()}
                        <button type="submit">Sign Up</button>
                    </form>
                    {error && <p className="error">{error}</p>}
                    {success && <p>Registration successful! Redirecting...</p>}
                    <button
                        className="back-button"
                        onClick={() => handleRoleSelection('')}
                    >
                        Go Back
                    </button>
                </div>
            )}
        </div>
    );
}

export default SignUp;
