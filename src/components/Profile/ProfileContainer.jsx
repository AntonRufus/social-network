import React, {Component} from 'react';
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
 
class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        // alert(userId)
        //this.props.match.params.userId; is not working
        if (!userId) {
            userId = 9457;
            // userId = 8245;??????????????????????????? check URL///
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        // debugger;
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
