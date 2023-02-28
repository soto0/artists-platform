import React, { FC, useEffect, useState } from 'react';
import s from './ProfileTop.module.css';
import avatar from './../../../assets/images/avatar.svg';
import changeIcon from './../../../assets/images/change_icon.svg';
import profileLargeIcon from './../../../assets/images/profileLarge.jpg';
import changeSmallIcon from './../../../assets/images/change_small_icon.svg';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import LargePhotoPopup from './LargePhotoPopup/LargePhotoPopup';
import { useProfileAction } from '../../../hooks/useActions';
import AvatarPopup from './AvatarPopup/AvatarPopup';

const ProfileTop: FC = () => {
    const [popupActive, setPopupActive] = useState(true);
    const { getProfileData } = useProfileAction();
    const { userLogin } = useTypedSelector(state => state.Login);
    const { LargePhoto, Avatar, Country, Gender, Bio, Login } = useTypedSelector(state => state.Profile);
    const loginProfile = window.location.pathname.slice(9);

    let onClickPopup = () => {
        setPopupActive(!popupActive);
    };

    useEffect(() => {
        if(userLogin != loginProfile) {
            getProfileData(loginProfile);
        } else {
            getProfileData(userLogin);
        }
    }, []);

    return (
        <div className={s.profile__top}>
            <img src={LargePhoto === '' ? profileLargeIcon : LargePhoto} alt={'profile_large_icon'} className={s.profile__large_icon} />
            <p className={'container'}>
                <div className={s.profile__top_info}>
                    <img src={Avatar === '' ? avatar : Avatar} alt={'profile_small_icon'} className={s.profile_small_icon} />
                    {
                        userLogin !== loginProfile ? 
                            undefined :                     
                            <span className={s.change__small_icon} onClick={onClickPopup}>
                                <img src={changeSmallIcon} alt={'change_small_icon'} className={s.change__small_icon_after} />
                                <p>изменить</p>
                                <div className={s.change__small_icon_back}></div>
                            </span> 
                    }
                    <div className={s.profile__top_info_text}>
                        <p className={s.profile__top_info_name}>{Login}</p>
                        <ul className={s.profile__top_info_list}>
                            <li className={s.profile__top_info_item}>
                                <Link to=''>Подписчики <span>0</span></Link>
                            </li>
                            <li className={s.profile__top_info_item}>
                                <Link to=''>Сообщества <span>0</span></Link>
                            </li>
                            <li className={s.profile__top_info_item}>
                                <Link to=''>Избранное <span>0</span></Link>
                            </li>
                        </ul>
                    </div>
                    {
                        userLogin !== loginProfile ? 
                            undefined :
                            <button className={s.change__large_icon} onClick={onClickPopup}>
                                <img src={changeIcon} alt={'change_icon'} className={s.change__large_icon_before} />
                                Изменить фон
                            </button>      
                    }
                </div>
            </p>
            <div onClick={onClickPopup} className={popupActive ? s.popup__back : s.popup__back_active}></div>
            <LargePhotoPopup 
                popupActive={popupActive} 
                getProfileData={getProfileData} 
                Avatar={Avatar} 
                userLogin={userLogin} 
                setPopupActive={setPopupActive}
                Country={Country}
                Gender={Gender}
                Bio={Bio}
            />
            <AvatarPopup 
                popupActive={popupActive} 
                LargePhoto={LargePhoto} 
                getProfileData={getProfileData} 
                userLogin={userLogin} 
                setPopupActive={setPopupActive} 
                Country={Country}
                Gender={Gender}
                Bio={Bio}
            />
        </div>
    );
};

export default ProfileTop;