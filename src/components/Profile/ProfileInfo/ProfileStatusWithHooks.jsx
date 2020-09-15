import React from 'react';
import profInfoCSS from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    return <>
        <div className={profInfoCSS.status}>My status:</div>
        <div className={profInfoCSS.status_cont}>
            {true &&
            <div>
                <span>
                      {props.status === '' || null ? 'no status' : props.status}
                </span>
            </div>}
            {false &&
            <div>
                <input autoFocus={true} type="text"/>
            </div>
            }
        </div>
    </>
}

export default ProfileStatusWithHooks;
