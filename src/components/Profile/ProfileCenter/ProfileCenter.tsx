import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './ProfileCenter.module.css';

const ProfileCenter: FC = () => {    
    const loginProfile = window.location.pathname.slice(9);
    console.log(loginProfile);
    
    return (
        <div className={s.profile__navigation}>
            <div className={'container'}>
                <div className={s.profile__navigation_list}>
                    <NavLink to={`/Profile/${loginProfile}`} className={s.navigation__link}>Главная</NavLink>
                    <NavLink to={`/Profile/${loginProfile}/About`} className={s.navigation__link}>Обо мне</NavLink>
                    <NavLink to={`/Profile/${loginProfile}/Favorites`} className={s.navigation__link}>Избранное</NavLink>
                    <NavLink to={`/Profile/${loginProfile}/Artworks`} className={s.navigation__link}>Работы</NavLink>
                    <NavLink to={`/Profile/${loginProfile}/Posts`} className={s.navigation__link}>Посты</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProfileCenter;