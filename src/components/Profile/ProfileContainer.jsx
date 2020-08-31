import React, {Component} from 'react';
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile_reducer";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 9457;
            // userId = 8245;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>;
        return <div><Profile {...this.props} profile={this.props.profile}/></div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
