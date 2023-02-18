import React, { FC, useEffect, useState } from 'react';
import s from './ProfileTop.module.css';
import axios from 'axios';
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
    const [avatarPopupActive, setAvatarPopupActive] = useState(true);
    const [largeImage, setLargeImage] = useState<any>();
    const [avatarImage, setAvatarImage] = useState<any>();
    const [imageUrl, setImageUrl] = useState<any>();
    const [avatarUrl, setAvatarUrl] = useState<any>();
    const { getProfileData } = useProfileAction();
    const { userLogin, isAuth } = useTypedSelector(state => state.Login);
    const { LargePhoto, Avatar } = useTypedSelector(state => state.Profile);

    let onClickChangeLargeIcon = () => {
        setPopupActive(!popupActive);
    };

    let onClickChangeAvatar = () => {
        setAvatarPopupActive(!avatarPopupActive);
    };

    const fileReader = new FileReader();
    const avatarReader = new FileReader();

    fileReader.onloadend = () => {
        setImageUrl(fileReader.result);
    };

    avatarReader.onloadend = () => {
        setAvatarUrl(avatarReader.result);
    };

    useEffect(() => {
        if (isAuth === false) {
            navigate('/Login/' + userLogin);
        };

        getProfileData(userLogin);
    }, []);

    useEffect(() => {
        if (largeImage) {
            fileReader.readAsDataURL(largeImage);
        } else if (avatarImage) {
            avatarReader.readAsDataURL(avatarImage);
        };
    });

    const uploadImage = async (event: any) => {
        const image = event.target.files[0];
        setLargeImage(image);
    };

    const uploadAvatar = async (event: any) => {
        const image = event.target.files[0];
        setAvatarImage(image);
    };

    const setImage = async () => {
        if (imageUrl) {
            await axios.put('http://localhost:3001/Profile/' + userLogin,
                { id: userLogin, login: userLogin, largePhoto: imageUrl, avatar: Avatar },
                { withCredentials: true });
        };

        getProfileData(userLogin);
        setPopupActive(true);
    };

    const setAvatar = async () => {
        if (avatarUrl) {
            await axios.put('http://localhost:3001/Profile/' + userLogin,
                { id: userLogin, login: userLogin, largePhoto: LargePhoto, avatar: avatarUrl },
                { withCredentials: true });
        };

        getProfileData(userLogin);
        setAvatarPopupActive(true);
    };

    return (
        <div className={s.profile__top}>
            <img src={LargePhoto === '' ? profileLargeIcon : LargePhoto} alt={'profile_large_icon'} className={s.profile__large_icon} />
            <div className={'container'}>
                <div className={s.profile__top_info}>
                    <img src={Avatar === '' ? avatar : Avatar} alt={'profile_small_icon'} className={s.profile_small_icon} />
                    <div className={s.change__small_icon} onClick={onClickChangeAvatar}>
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
                    <button className={s.change__large_icon} onClick={onClickChangeLargeIcon}>
                        <img src={changeIcon} alt={'change_icon'} className={s.change__large_icon_before} />
                        Изменить фон</button>
                </div>
            </div>
            <div onClick={onClickChangeAvatar} className={avatarPopupActive ? s.popup__back : s.popup__back_active}></div>
            <div onClick={onClickChangeLargeIcon} className={popupActive ? s.popup__back : s.popup__back_active}></div>
            <LargePhotoPopup uploadImage={uploadImage} setImage={setImage} popupActive={popupActive} />
            <AvatarPopup uploadAvatar={uploadAvatar} setAvatar={setAvatar} avatarPopupActive={avatarPopupActive} />
        </div>
    );
};

export default ProfileTop;