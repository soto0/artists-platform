import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import s from './ProfileMenu.module.css';
import avatar from './../../../assets/images/avatar.svg';
import { useActions } from '../../../hooks/useActions';

interface ProfileMenuProps {
    UserLogin: any,
    ProfileMenuActive: boolean,
    Avatar: string
};

const ProfileMenu: FC<ProfileMenuProps> = (props) => {
    const { getExitLogin } = useActions();
    const navigate = useNavigate();

    const exit = () => {
        getExitLogin();
        navigate('/Login');
    };

    return (
        <div className={props.ProfileMenuActive ? s.profile__menu : s.profile__menu_active}>
            <Link to={'/Profile/' + props.UserLogin} className={s.profile__menu_top}>
                <img src={props.Avatar ? props.Avatar : avatar} alt={'avatar-icon'} className={s.profile__menu_avatar} />
                <div className={s.profile__menu_text}>
                    <p className={s.profile__menu_name}>{props.UserLogin}</p>
                </div>
            </Link>
            <ul className={s.profile__menu_list}>
                <li className={s.profile__menu_item}>
                    <Link to='NewArtworks'>Новые работы</Link>
                </li>
                <li className={s.profile__menu_item}>
                    <Link to='NewPosts'>Новые посты</Link>
                </li>
                <li className={s.profile__menu_item}>
                    <Link to='Users'>Пользователи</Link>
                </li>
                <li className={s.profile__menu_item}>
                    <button className={s.profile__menu_exit} onClick={exit}>Выйти</button>
                </li>
            </ul>
        </div>
    );
};

export default ProfileMenu;