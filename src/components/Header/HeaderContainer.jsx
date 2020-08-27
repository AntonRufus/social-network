import React, {Component} from 'react';
import Header from "./Header";
import headCSS from './Header.module.css';
import * as axios from "axios";
import {setAuthUserData, toggleIsFetching} from "../../redux/auth_reducer";
import {connect} from "react-redux";
import Preloader from "../common/preloader/Preloader";

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/auth/me/`,
            {withCredentials: true}
        ).then(response => {
            // debugger;
            console.log(response)
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data;
                this.props.setAuthUserData(email, id, login);
                this.props.toggleIsFetching(false);
            }
            // debugger;
        });
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

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);
