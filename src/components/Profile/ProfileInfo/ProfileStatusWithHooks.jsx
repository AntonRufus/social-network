import React, {useEffect, useState} from 'react';
import profInfoCSS from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    };

    return <>
        <div className={profInfoCSS.status}>My status:</div>
        <div className={profInfoCSS.status_cont}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>
                      {props.status === '' || null ? 'no status' : props.status}
                </span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true}
                       onBlur={deactivateEditMode} type="text"
                       value={status}
                />
            </div>
            }
        </div>
    </>
}

export default ProfileStatusWithHooks;
