import React from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

/*
let mapDispatchToProps = (dispatch) => {
    // dispatch
}
const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
*/

const NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;
