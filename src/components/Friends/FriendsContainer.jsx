import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

/*
let mapDispatchToProps = (dispatch) => {
    // dispatch
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
*/

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
