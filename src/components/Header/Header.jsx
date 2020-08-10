import React from 'react';
import headCSS from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to='/profile'>
                <div className={headCSS.header_block}>
                    <img className={headCSS.logo} src='http://localhost:3000/pic/buildlogo.jpg' alt='logo'/>
                </div>
            </NavLink>
        </header>
    )
}

export default Header;
