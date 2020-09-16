import React from 'react';
import profInfoCSS from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        // editMode: true,
        status: this.props.status,
    }

    activateEditMode = () => {
        // console.log(this.state.editMode);
        this.setState({editMode: true})
        // this.state.editMode = true; //changed state without render.
        // console.log(this.state.editMode);
        //setState is asynchronous, that's why both times console.log shows 'false'
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //do setState only when certain condition is met
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    render() {
        return <>
            <div className={profInfoCSS.status}>My status:</div>
            <div className={profInfoCSS.status_cont}>
                {!this.state.editMode
                    ? <span onDoubleClick={this.activateEditMode}>
                        {this.props.status === '' || null ? 'no status' : this.props.status}
                      </span>
                    : <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                             value={this.state.status} type="text"/>
                }
            </div>
        </>
    }
}

export default ProfileStatus;
