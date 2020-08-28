import React from 'react';
import headCSS from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className={headCSS.header_block}>
                <NavLink to='/profile/9457'>
                    <img className={headCSS.logo} src='http://localhost:3000/pic/buildlogo.jpg' alt='logo'/>
                </NavLink>
                <div className={headCSS.login_block}>
                    {console.log(props.login)}
                    {props.isAuth
                        ? <NavLink to='/profile'> {props.login} </NavLink>
                        : <NavLink to='/login'> Login </NavLink>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;
