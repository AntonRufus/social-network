import React from 'react';
import navCSS from './NavBar.module.css';
import NavBarFriends from "./NavBarFriends/NavBarFriends";
import NavBarLink from "./NavBarLink";

const NavBar = ({dialogsPage}) => {
    let friendsShortList = dialogsPage.dialogs
        .map(dialog =>
            <NavBarFriends url={dialog.photoUrl}
                           name={dialog.name}
                           id={dialog.id}
                           key={dialog.id}
            />
        );

    return <nav>
        <NavBarLink to={'/profile'} body={'Profile'}/>
        <NavBarLink to={'/dialogs'} body={'Messages'}/>
        <NavBarLink to={'/users'} body={'Users'}/>
        <NavBarLink to={'/followers'} body={'Followers'}/>
        <NavBarLink to={'/news'} body={'News'}/>
        <NavBarLink to={'/music'} body={'Music'}/>
        <div className={navCSS.settings}>
            <NavBarLink to={'/settings'} body={'Settings'}/>
        </div>
        <div className={navCSS.friends}>
            <NavBarLink to={'/friends'} body={<b>FRIENDS</b>}/>
        </div>
        <div className={navCSS.avatar_block}>
            {/*put 3 followed users*/}
            <div className={navCSS.avatars_top}>
                {friendsShortList[5]}
                {friendsShortList[1]}
                {friendsShortList[15]}
            </div>
        </div>
    </nav>
}

export default NavBar;
