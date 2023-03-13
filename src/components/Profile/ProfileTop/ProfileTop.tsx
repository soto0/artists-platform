import React, { FC, useEffect, useState } from 'react';
import s from './ProfileTop.module.css';
import avatar from './../../../assets/images/avatar.svg';
import changeIcon from './../../../assets/images/change_icon.svg';
import profileLargeIcon from './../../../assets/images/profileLarge.jpg';
import changeSmallIcon from './../../../assets/images/change_small_icon.svg';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LargePhotoPopup from './LargePhotoPopup/LargePhotoPopup';
import { useActions } from '../../../hooks/useActions';
import AvatarPopup from './AvatarPopup/AvatarPopup';

const ProfileTop: FC = () => {
    const { FavoritesStatistic, SubscriptionsStatistic } = useTypedSelector(state => state.Profile);
    const [popupLargePhotoActive, setPopupLargePhotoActive] = useState(true);
    const [avatarPopupActive, setAvatarPopupActive] = useState(true);
    const { getProfileData } = useActions();
    const { userLogin } = useTypedSelector(state => state.Login);
    const { LargePhoto, Avatar, Country, Gender, Bio, Login } = useTypedSelector(state => state.Profile);
    const loginProfile = window.location.pathname.split('/').slice(2, 3).join('/');

    const onClickAvatarPopup = () => {
        setAvatarPopupActive(!avatarPopupActive);
    };

    const onClickLargePhotoPopup = () => {
        setPopupLargePhotoActive(!popupLargePhotoActive);
    };

    useEffect(() => {
        if(userLogin !== loginProfile) {
            getProfileData(loginProfile);
        } else {
            getProfileData(userLogin);
        }
    }, []);

    return (
        <div className={s.profile__top}>
            <img src={LargePhoto === '' ? profileLargeIcon : LargePhoto} alt={'profile_large_icon'} className={s.profile__large_icon} />
            <div className={'container'}>
                <div className={s.profile__top_info}>
                    <img src={Avatar === '' ? avatar : Avatar} alt={'profile_small_icon'} className={s.profile_small_icon} />
                    {
                        userLogin !== loginProfile ?
                            undefined :
                            <span className={s.change__small_icon} onClick={onClickAvatarPopup}>
                                <img src={changeSmallIcon} alt={'change_small_icon'} className={s.change__small_icon_after} />
                                <p>изменить</p>
                                <div className={s.change__small_icon_back}></div>
                            </span>
                    }
                    <div className={s.profile__top_info_text}>
                        <p className={s.profile__top_info_name}>{Login}</p>
                        <ul className={s.profile__top_info_list}>
                            <li className={s.profile__top_info_item}>
                                <p>Подписчики {SubscriptionsStatistic}</p>
                            </li>
                            <li className={s.profile__top_info_item}>
                                <p>Избранное {FavoritesStatistic}</p>
                            </li>
                        </ul>
                    </div>
                    {
                        userLogin !== loginProfile ?
                            undefined :
                            <button className={s.change__large_icon} onClick={onClickLargePhotoPopup}>
                                <img src={changeIcon} alt={'change_icon'} className={s.change__large_icon_before} />
                                Изменить фон
                            </button>
                    }
                </div>
            </div>
            <LargePhotoPopup 
                PopupActive={popupLargePhotoActive} 
                GetProfileData={getProfileData} 
                Avatar={Avatar} 
                UserLogin={userLogin} 
                SetPopupActive={setPopupLargePhotoActive}
                Country={Country}
                Gender={Gender}
                Bio={Bio}
            />
            <AvatarPopup 
                PopupActive={avatarPopupActive} 
                LargePhoto={LargePhoto} 
                GetProfileData={getProfileData} 
                UserLogin={userLogin} 
                SetPopupActive={setAvatarPopupActive} 
                Country={Country}
                Gender={Gender}
                Bio={Bio}
            />
             <div onClick={onClickLargePhotoPopup} className={popupLargePhotoActive ? s.popup__back : s.popup__back_active}></div>
            <div onClick={onClickAvatarPopup} className={avatarPopupActive ? s.popup__back : s.popup__back_active}></div>
        </div>
    );
};

export default ProfileTop;