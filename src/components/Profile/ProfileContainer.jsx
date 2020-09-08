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
        //how to get the last numbers of url(userId)?
        debugger;
        // alert(userId)
        //this.props.match.params.userId; is not working
        if (!userId) {
            userId = 9457;
            // userId = 8245;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <div>
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(connect(mapStateToProps,
    {getUserProfile, getStatus, updateStatus}), withRouter, withAuthRedirect)(ProfileContainer);
