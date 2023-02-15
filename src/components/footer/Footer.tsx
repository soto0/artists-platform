import React, { FC } from 'react';
import s from './Footer.module.css';
import Logo from '../../assets/Logo/Logo';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
    return (
        <footer>
            <div className={'container'}>
                <div className={s.wrapper}>
                    <Logo />
                    <div className={s.info}>
                        <Link to={''} className={s.footer__link}>Контакты</Link>
                        <Link to={''} className={s.footer__link}>Вопросы</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;