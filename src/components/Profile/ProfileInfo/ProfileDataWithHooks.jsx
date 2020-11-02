import React, {useEffect, useState} from 'react';

const ProfileDataWithHooks = (props) => {

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
        {!editMode &&
        <span onDoubleClick={activateEditMode}>
                      {props.status === '' || null ? 'no status' : props.status}
                </span>}
        {editMode &&
        <input onChange={onStatusChange} autoFocus={true}
               onBlur={deactivateEditMode} type="text"
               value={status}
        />}
    </>
}

export default ProfileDataWithHooks;
