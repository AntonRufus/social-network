import React from 'react';
import profInfoCSS from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={profInfoCSS.profile_block}>
            <div>
                <img className={profInfoCSS.bgc_photo}
                     src='http://localhost:3000/pic/bgc200.jpg'
                     alt='bgc-photo'/>
            </div>
            <div className={profInfoCSS.profile_description}>
                <div>
                    <img className={profInfoCSS.avatar}
                         src='http://localhost:3000/pic/ronin.jpg'
                         alt='avatar'/>
                </div>
                <div>
                    <div className={profInfoCSS.name}> Name</div>
                    <div className={profInfoCSS.info_main}>
                        <div className={profInfoCSS.info}>DOB</div>
                        <div className={profInfoCSS.info}>City</div>
                        <div className={profInfoCSS.info}>Education</div>
                        <div className={profInfoCSS.info}>WebSite:
                            https://
                            <input type="text" defaultValue={'github.com/AntonRufus'}/>
                            /newMaster
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
