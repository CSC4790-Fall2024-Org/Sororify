import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        axios.post('/api/signup', { firstName, lastName, email, userType })
            .then(response => {
                // Redirect the user to the login page
                navigate('/login');
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </label>
            <label>
                Last Name:
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                User Type:
                <select value={userType} onChange={e => setUserType(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="pnm">PNM</option>
                    <option value="member">Member</option>
                </select>
            </label>
            <input type="submit" value="Sign Up" />
        </form>
    );
};

export default SignUpForm;