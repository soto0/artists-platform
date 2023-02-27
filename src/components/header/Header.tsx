import React, { FC, useState } from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import avatar from './../../assets/images/avatar.svg';
import ProfileMenu from './ProfileMenu/ProfileMenu';

const Header: FC = () => {
    const [menuActive, setMenuActive] = useState(true);
    const [profileMenuActive, setProfileMenuActive] = useState(true);
    const { isAuth, userLogin } = useTypedSelector(state => state.Login);
    
    const { Avatar } = useTypedSelector(state => state.Header);


    let onClickBurger = () => {
        setMenuActive(!menuActive);
        setProfileMenuActive(true);
    };

    let onClickProfile = () => {
        setProfileMenuActive(!profileMenuActive);
        setMenuActive(true);
    };

    return (
        <header>
            <div className={'container'}>
                <div className={s.wrapper}>
                    <div className={s.logo__block}>
                        <Logo />
                    </div>
                    <div className={isAuth ? s.burger_avatar : s.burger} onClick={onClickBurger}>
                        <span className={s.first__line}></span>
                        <span className={s.second__line}></span>
                        <span className={s.third__line}></span>
                    </div>
                    <nav className={menuActive ? s.navigation : s.navigation_active}>
                        <ul className={s.navigation__list}>
                            <li className={s.navigation__item}>
                                <Link to={''} className={s.navigation__link}>Главная</Link>
                            </li>
                            <li className={s.navigation__item}>
                                <Link to={'/Categories'} className={s.navigation__link}>Категории</Link>
                            </li>
                            <li className={s.navigation__item}>
                                <Link to={'/Users'} className={s.navigation__link}>Пользователи</Link>
                            </li>
                            <li className={s.navigation__item}>
                                <Link to={'/NewArtworks'} className={s.navigation__link}>Новые работы</Link>
                            </li>
                            <li className={s.navigation__item}>
                                <Link to={'/NewPosts'} className={s.navigation__link}>Новые посты</Link>
                            </li>
                        </ul>
                    </nav>
                    {
                        isAuth ?
                            <div className={s.profile}>
                                <div className={s.profile__top} onClick={onClickProfile}>
                                    <p className={s.profile__name}>{userLogin}</p>
                                    <img src={Avatar ? Avatar : avatar} alt={'avatar-icon'} className={s.profile__icon} />
                                </div>
                                <ProfileMenu profileMenuActive={profileMenuActive} userLogin={userLogin} />
                            </div> :
                            <div className={menuActive ? s.login__block : s.login__block_active}>
                                <Link to={'/Login'} className={s.login}>Войти</Link>
                                <Link to={'/Registration'} className={s.registration}>Зарегистрироваться</Link>
                            </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;