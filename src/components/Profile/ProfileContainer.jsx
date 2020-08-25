import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1709`)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
