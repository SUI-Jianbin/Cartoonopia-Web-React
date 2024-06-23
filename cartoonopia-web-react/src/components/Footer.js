/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : footer component
 *@Version       : 1.0.0.0
 *@Create        :2024-06-23
 *@Author        :Jianbin
 */

import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="company-information">
                <p>Web Application Development</p>
                <p>School of Computer Science</p>
                <p>Cartoonopia Web Application</p>
            </div>
            <div className="footer-content">
                © {year} Datalytics. All Rights Reserved.
            </div>
            <div className="group-information">
                <p>Team members</p>
                <ul>
                    <li>Chris</li>
                    <li>Eliana</li>
                    <li>Jianbin</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;