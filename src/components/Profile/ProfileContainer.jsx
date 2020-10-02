import React from 'react';
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {match, authorizedUserId, history, getUserProfile, getStatus} = this.props;
        let userId = match.params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                history.push('/login')
            }
            // userId = 9457;
            // userId = 8245;
        }
        getUserProfile(userId);
        getStatus(userId);
    }

    render() {
        const {profile, status, updateStatus} = this.props;
        return <Profile
            {...this.props}
            profile={profile}
            status={status}
            updateStatus={updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps,
    {getUserProfile, getStatus, updateStatus}), withRouter, withAuthRedirect)(ProfileContainer);
