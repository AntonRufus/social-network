import React from 'react';
import profInfoCSS from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        // editMode: true,
    }

    activateEditMode = () => {
        console.log(this.state.editMode);
        this.setState({editMode: true})
        // this.state.editMode = true; //changed state without render.
        console.log(this.state.editMode);
        //setState is asynchronous, that's why both times console.log shows 'false'
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {
        return <>
            <div className={profInfoCSS.status}>My status:</div>
            <div className={profInfoCSS.status_cont}>
                {!this.state.editMode
                    ? <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    : <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status}/>
                }
            </div>
        </>
    }
}

export default ProfileStatus;
