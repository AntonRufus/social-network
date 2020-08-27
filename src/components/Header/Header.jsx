import React from 'react';
import headCSS from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={headCSS.header_block}>
                <NavLink to='/profile'>
                    <img className={headCSS.logo} src='http://localhost:3000/pic/buildlogo.jpg' alt='logo'/>
                </NavLink>
                <NavLink to='/login'>
                    <div className={headCSS.login_block}>Login</div>
                </NavLink>
            </div>
        </header>
    )
}

export default Header;
