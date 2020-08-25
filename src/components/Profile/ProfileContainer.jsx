import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 9457;
            // userId = 8245;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                    this.props.setUserProfile(response.data);
                }
            );
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
