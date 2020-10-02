import React from 'react';
import linkCSS from './NavBarLink.module.css';
import {NavLink} from "react-router-dom";

const NavBarLink = ({to, body}) => {
    return <div className={linkCSS.item}>
        <NavLink to={to}
                 activeClassName={linkCSS.activeLink}>
            {body}
        </NavLink>
    </div>
}

export default NavBarLink;
