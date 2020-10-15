import React from 'react';
import headCSS from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header>
        <div className={headCSS.header_block}>
            <NavLink to='/profile/'>
                <img className={headCSS.logo} src='/social-network/pic/buildlogo.jpg' alt='logo'/>
            </NavLink>
            <div className={headCSS.login_block}>
                {props.isAuth
                    ? <NavLink to='/profile'>
                        <button className={headCSS.logout} onClick={props.logout}>Log out</button>
                        <span className={headCSS.login}>{props.login}</span>
                    </NavLink>
                    : <NavLink to='/login'> Login </NavLink>
                }
            </div>
        </div>
    </header>
}

export default Header;
