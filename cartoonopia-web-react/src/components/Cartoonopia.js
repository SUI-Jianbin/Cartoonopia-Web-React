/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : cartoonopia component
 *@Version       : 1.0.0.0
 *@Create        :2024-06-25
 *@Author        :Jianbin
 */

import React from 'react';
import '../styles/Cartoonopia.css';
import { useNavigate} from 'react-router-dom';

const Cartoonopia = () => {
    const navigate = useNavigate();
    const handleBacktoMain = () => {
        setTimeout(() => {
            navigate('/main', { replace: true });
            window.location.reload();
        }, 666);
    };

    return (
        <div className="form-title-wrapper">
            <p className="form-title-bg">Cartoonopia</p>
            <p className="form-title-fg" onClick={handleBacktoMain}>Cartoonopia</p>
        </div>
    )
}

export default Cartoonopia;