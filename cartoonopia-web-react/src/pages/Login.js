/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : cartoonopia login page
 *@Version       : 1.0.0.0
 *@Create        :2024-06-22
 *@Author        :Jianbin
 */

import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import '../styles/Login.css';
import Cartoonopia from "../components/Cartoonopia";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    localStorage.clear();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/userlist/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if(data.message){alert(data.message)}
            if (data) {
                localStorage.setItem('currentLoginUser', JSON.stringify(data.user))
                localStorage.setItem('role', "member");

                const adminIdList = data.adminRole;
                const currentLoginUserId = data.user._id
                adminIdList.forEach(adminId => {

                    if(adminId._id === currentLoginUserId){
                        localStorage.setItem('role', "admin");
                    }
                });

                setTimeout(() => {
                    navigate('/main');
                }, 666);
            }
            else {
                console.log('Login failed:', data.message);
            }
        }
        catch (error) {
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
            <div className="login-form">
                <Cartoonopia />
                <p className="form-subtitle">The home of characters and cartoons</p>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='input-block'>
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
                    <div className='input-block'>
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
                    <div className='input-block'>
                        <button type="submit" className="submit">Sign In</button>
                    </div>
                </form>
                <p className='check-account'>Don't have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </div>
    );
}

export default Login;