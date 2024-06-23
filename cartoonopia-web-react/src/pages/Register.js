/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : register page
 *@Version       : 1.0.0.0
 *@Create        :2024-06-23
 *@Author        :Jianbin
 */

import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/Register.css';

function Register() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/userlist/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname, lastname, email, password }),
            });

            if (!response.ok) {
                const { message } = await response.json();
                throw new Error(message);
            }
            else {
                alert("Registration successful. Please go back login page.");
                document.getElementsByTagName('input').value= '';
            }
        } catch (error) {
            setError(error.message);
        }
    };
    const handleBacktoMain = () => {
        setTimeout(() => {
            navigate('/main', { replace: true });
            window.location.reload();
        }, 666);
    };

    return (
        <div className="body-background">
            <div className="register-form">
                <div className="form-title-wrapper">
                    <p className="form-title-bg">Cartoonopia</p>
                    <p className="form-title-fg" onClick={handleBacktoMain}>Cartoonopia</p>
                </div>
                <p className="form-subtitle">The home of characters and cartoons</p>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-block">
                        <input
                            type="text"
                            id="firstname"
                            className="input-field"
                            placeholder="First Name"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-block">
                        <input
                            type="text"
                            id="lastname"
                            className="input-field"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-block">
                        <input
                            type="email"
                            id="email"
                            className="input-field"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-block">
                        <input
                            type="password"
                            id="password"
                            className="input-field"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                    </div>
                    <div className="input-block">
                        <button type="submit" className="submit">Sign Up</button>
                    </div>
                </form>
                <p className="check-account">Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </div>
    );
}

export default Register;
