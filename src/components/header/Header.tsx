import React, { FC, useState } from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import avatar from './../../assets/images/avatar.svg';

const Header: FC = () => {
    const [menuActive, setMenuActive] = useState(true);
    const { isAuth, userLogin } = useTypedSelector(state => state.Login);

    let onClickBurger = () => {
        setMenuActive(!menuActive);
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
                                <Link to={''} className={s.navigation__link}>Категории</Link>
                            </li>
                            <li className={s.navigation__item}>
                                <Link to={''} className={s.navigation__link}>Подписки</Link>
                            </li>
                            <li className={s.navigation__item}>
                                <Link to={''} className={s.navigation__link}>Избранное</Link>
                            </li>
                        </ul>
                    </nav>
                    {
                        isAuth ?
                            <div className={s.profile}>
                                <p className={s.profile__name}>{userLogin}</p>
                                <img src={avatar} alt='' className={s.profile__icon} />
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