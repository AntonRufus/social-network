import React from 'react';
import StoreContext from "../../StoreContext";
import FriendsList from "./FriendsList/FriendsList";
import Friends from "./Friends";

const FriendsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let avatarsElements = state.dialogsPage.dialogs
                        .map(dialog => <FriendsList url={dialog.photoUrl}
                                                    name={dialog.name}
                                                    id={dialog.id}/>);

                    return <Friends avatarsElements={avatarsElements}/>

                }
            }
        </StoreContext.Consumer>
    )
}

export default FriendsContainer;
