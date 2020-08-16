import React from 'react';
import StoreContext from "../../StoreContext";
import NavBarFriends from "./NavBarFriends/NavBarFriends";
import NavBar from "./NavBar";

const NavBarContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let friendsShortList = state.dialogsPage.dialogs
                        .map(dialog => <NavBarFriends url={dialog.photoUrl}
                                                      name={dialog.name}
                                                      id={dialog.id}/>);
                    console.log(friendsShortList);

                    return <NavBar friendsShortList={friendsShortList}/>

                }
            }
        </StoreContext.Consumer>
    )
}

export default NavBarContainer;
