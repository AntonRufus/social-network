import React from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {dialogsPage: state.dialogsPage}
}

const NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;
