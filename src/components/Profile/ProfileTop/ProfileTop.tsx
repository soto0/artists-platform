import React, { FC } from 'react';
import s from './ProfileTop.module.css';
import avatar from './../../../assets/images/avatar.svg';
import changeIcon from './../../../assets/images/change_icon.svg';
import changeSmallIcon from './../../../assets/images/change_small_icon.svg';
import profileLargeIcon from './../../../assets/images/profileLarge.jpg';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Link } from 'react-router-dom';

const ProfileTop: FC = () => {
    const { userLogin } = useTypedSelector(state => state.Login);
    
    return (
        <div className={s.profile__top}>
            <img src={profileLargeIcon} alt={'profile_large_icon'} className={s.profile__large_icon} />
            <div className={'container'}>
                <div className={s.profile__top_info}>
                    <img src={avatar} alt={'profile_small_icon'} className={s.profile_small_icon} />
                    <div className={s.change__small_icon}>
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
                    <button className={s.change__large_icon}>
                        <img src={changeIcon} alt={'change_icon'} className={s.change__large_icon_before} />
                        Изменить фон</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileTop;