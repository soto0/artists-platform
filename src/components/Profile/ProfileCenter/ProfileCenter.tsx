import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import s from './ProfileCenter.module.css';

const ProfileCenter: FC = () => {    
    const { userLogin } = useTypedSelector(state => state.Login);
    
    return (
        <div className={s.profile__navigation}>
            <div className={'container'}>
                <div className={s.profile__navigation_list}>
                    <NavLink to={`/Profile/${userLogin}/`} className={s.navigation__link}>Главная</NavLink>
                    <NavLink to={`/Profile/${userLogin}/About`} className={s.navigation__link}>Обо мне</NavLink>
                    <NavLink to={`/Profile/${userLogin}/Favorites`} className={s.navigation__link}>Избранное</NavLink>
                    <NavLink to={`/Profile/${userLogin}/Artworks`} className={s.navigation__link}>Работы</NavLink>
                    <NavLink to={`/Profile/${userLogin}/Posts`} className={s.navigation__link}>Посты</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProfileCenter;