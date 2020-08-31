import React, {Component} from 'react';
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
        return <div><Profile {...this.props} profile={this.props.profile}/></div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
