import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './ProfileMenu.module.css';
import avatar from './../../../assets/images/avatar.svg';

interface ProfileMenuProps {
    userLogin: any,
    profileMenuActive: boolean
}

const ProfileMenu: FC<ProfileMenuProps> = (props) => {
    return (
        <div className={props.profileMenuActive ? s.profile__menu : s.profile__menu_active}>
            <Link to={'/Profile/' + props.userLogin} className={s.profile__menu_top}>
                <img src={avatar} alt={'avatar-icon'} className={s.profile__menu_avatar} />
                <div className={s.profile__menu_text}>
                    <p className={s.profile__menu_name}>{props.userLogin}</p>
                    <p className={s.profile__menu_status}>hello?!</p>
                </div>
            </Link>
            <ul className={s.profile__menu_list}>
                <li className={s.profile__menu_item}>
                    <Link to=''>Подписки</Link>
                </li>
                <li className={s.profile__menu_item}>
                    <Link to=''>Новые посты</Link>
                </li>
                <li className={s.profile__menu_item}>
                    <Link to=''>Художники</Link>
                </li>
                <li className={s.profile__menu_item}>
                    <Link to=''>Настройки</Link>
                </li>
                <li className={s.profile__menu_item}>
                    <button className={s.profile__menu_exit}>Выйти</button>
                </li>
            </ul>
        </div>
    );
};

export default ProfileMenu;