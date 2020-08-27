import React, {Component} from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/auth_reducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {withCredentials: true})
            .then(response => {
                // debugger;
                console.log(response)
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    this.props.setAuthUserData(email, id, login);
                }
                // debugger;
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
