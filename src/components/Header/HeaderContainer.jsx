import React, {Component} from 'react';
import Header from "./Header";
import headCSS from './Header.module.css';
import Preloader from "../common/preloader/Preloader";
import {getAuthUserData} from "../../redux/auth_reducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <>
            <div className={headCSS.login_process}>
                {this.props.isFetchingAuth ? <Preloader/> : null}
            </div>
            <div><Header {...this.props}/></div>
        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetchingAuth: state.auth.isFetchingAuth,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
