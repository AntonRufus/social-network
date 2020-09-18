import React from 'react';
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
            // userId = 9457;
            // userId = 8245;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <>
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        </>
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
