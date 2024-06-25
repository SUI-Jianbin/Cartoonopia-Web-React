/**
 *Created with IntelliJ IDEA
 *@project       : cartoonopia-web-react
 *@Description   : header component
 *@Version       : 1.0.0.0
 *@Create        :2024-06-22
 *@Author        :Jianbin
 */

import React, {useState , useEffect , useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cartoonopia from '../components/Cartoonopia';
import '../styles/Header.css';
import groupIcon from '../icons/groupicon.png';
import menuIcon from '../icons/menuicon.png';
import profileIcon from '../icons/profileicon.png';
import addIcon from '../icons/addicon.png';
import editIcon from '../icons/editicon.png';
import adminIcon from '../icons/adminicon.png';
import manageIcon from '../icons/manageicon.png';
import deleteIcon from '../icons/deleteicon.png';
import historyIcon from '../icons/historyicon.png';
import loginIcon from '../icons/loginicon.png'
import logoutIcon from '../icons/logouticon.png'

//all pages' header, link to other pages
const HeadBar = ({ userRole }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentLoginUser')));
    const menuRef = useRef();
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const closeMenu = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', closeMenu);

        return () => {
            document.removeEventListener('mousedown', closeMenu);
        };
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setTimeout(() => {
            navigate('/main', { replace: true });
            window.location.reload();
        }, 666);
    };

    const handleBacktoMain = () => {
        navigate('/main', { replace: true });
        window.location.reload();
    };

    const menuItems = () => {
        const items = [
            { name: 'Add Character', path: '../add_character', icon: addIcon },
            { name: 'Edit Character', path: '../list_character', icon: editIcon },
        ];

        if (userRole === 'admin') {
            items.push(
                { name: 'Manage Users', path: '../pages/userList', icon: adminIcon },
                { name: 'Manage Applications', path: '../pages/applicationList', icon: manageIcon },
                { name: 'Delete Character', path: '../deletecharacter', icon: deleteIcon },
                { name: 'Character Change History', path: '../pages/changeHistory', icon: historyIcon }
            );
        }
        items.push({ name: 'Logout', icon: logoutIcon, action: handleLogout });

        return items.map((item, index) => item.path ? (
            <Link key={index} to={item.path} className='menu-item'>
                <img src={item.icon} alt={item.name} />
                <span className='menu-text'>{item.name}</span>
            </Link>
        ) : (
            <button key={index} onClick={item.action} className='logout'>
                <img src={item.icon} alt={item.name} />
                <span className='logout-text'>{item.name}</span>
            </button>
        ));
    }

    return (
        <div className='navigation-bar'>
            {user ? (
                <>
                    <div className='logo'>
                        <Cartoonopia></Cartoonopia>
                    </div>
                    <Link to='../pages/userProfileList'><img className='group' src={groupIcon} alt='group'/></Link>
                    <Link to='../pages/userProfile'><img className='profile' src={profileIcon} alt='profile'/></Link>
                    <div className='menu-icon' onClick={toggleMenu}>
                        <img className="menu" src={menuIcon} alt="Menu" />
                    </div>
                    {isMenuOpen && (
                        <div className='menu-dropdown' ref={menuRef}>
                            <span className='welcome'>Welcome {user.lastname}</span>
                            {menuItems()}
                        </div>
                    )}
                </>
            ) : (
                <div className='login'>
                    <Link to='/login' className='login-prompt'>
                        <img  src={loginIcon} alt='login'/>
                        <span className='login-text'>Login</span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default HeadBar;