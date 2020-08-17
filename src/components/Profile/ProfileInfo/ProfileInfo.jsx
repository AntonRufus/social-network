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
                <div className={profInfoCSS.info_main_block}>
                    <div className={profInfoCSS.name}>
                        <div className={profInfoCSS.info_name}>
                            Name:
                            <div className={profInfoCSS.info_data}>
                                <input/>
                            </div>
                        </div>
                    </div>
                    <div className={profInfoCSS.info_main}>
                        <div className={profInfoCSS.info}>
                            DOB:
                            <div className={profInfoCSS.info_data}>
                                <input/>
                            </div>
                        </div>
                        <div className={profInfoCSS.info}>
                            City:.
                            <div className={profInfoCSS.info_data}>
                                <input/>
                            </div>
                        </div>
                        <div className={profInfoCSS.info}>
                            Education:
                            <div className={profInfoCSS.info_data}>
                                <input/>
                            </div>
                        </div>
                        <div className={profInfoCSS.info}>
                            WebSite:
                            <div className={profInfoCSS.info_data}>
                                https://
                                <input type="text" defaultValue={'github.com/AntonRufus'}/>
                                /newMaster
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
