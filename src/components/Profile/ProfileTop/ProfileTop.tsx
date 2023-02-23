import React, { FC, useEffect, useState } from 'react';
import s from './ProfileTop.module.css';
import avatar from './../../../assets/images/avatar.svg';
import changeIcon from './../../../assets/images/change_icon.svg';
import profileLargeIcon from './../../../assets/images/profileLarge.jpg';
import changeSmallIcon from './../../../assets/images/change_small_icon.svg';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Link, useNavigate } from 'react-router-dom';
import LargePhotoPopup from './LargePhotoPopup/LargePhotoPopup';
import { useProfileAction } from '../../../hooks/useActions';
import AvatarPopup from './AvatarPopup/AvatarPopup';

const ProfileTop: FC = () => {
    const navigate = useNavigate();
    const [popupActive, setPopupActive] = useState(true);
    const { getProfileData } = useProfileAction();
    const { userLogin, isAuth } = useTypedSelector(state => state.Login);
    const { LargePhoto, Avatar, Country, Gender, Bio } = useTypedSelector(state => state.Profile);

    let onClickPopup = () => {
        setPopupActive(!popupActive);
    };

    useEffect(() => {
        if (isAuth === false) {
            navigate('/Login/' + userLogin);
        };

        getProfileData(userLogin);
    }, []);

    return (
        <div className={s.profile__top}>
            <img src={LargePhoto === '' ? profileLargeIcon : LargePhoto} alt={'profile_large_icon'} className={s.profile__large_icon} />
            <div className={'container'}>
                <div className={s.profile__top_info}>
                    <img src={Avatar === '' ? avatar : Avatar} alt={'profile_small_icon'} className={s.profile_small_icon} />
                    <div className={s.change__small_icon} onClick={onClickPopup}>
                        <img src={changeSmallIcon} alt={'change_small_icon'} className={s.change__small_icon_after} />
                        <p>изменить</p>
                        <div className={s.change__small_icon_back}></div>
                    </div>
                    <div className={s.profile__top_info_text}>
                        <p className={s.profile__top_info_name}>{userLogin}</p>
                        <ul className={s.profile__top_info_list}>
                            <li className={s.profile__top_info_item}>
                                <Link to=''>Подписчики 0</Link>
                            </li>
                            <li className={s.profile__top_info_item}>
                                <Link to=''>Сообщества 0</Link>
                            </li>
                            <li className={s.profile__top_info_item}>
                                <Link to=''>Избранное 0</Link>
                            </li>
                        </ul>
                    </div>
                    <button className={s.change__large_icon} onClick={onClickPopup}>
                        <img src={changeIcon} alt={'change_icon'} className={s.change__large_icon_before} />
                        Изменить фон</button>
                </div>
            </div>
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