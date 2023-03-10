import React, { FC } from 'react';
import s from './Footer.module.css';
import Logo from '../../assets/Logo/Logo';

const Footer: FC = () => {
    return (
        <footer>
            <div className={'container'}>
                <div className={s.wrapper}>
                    <Logo />
                </div>
            </div>
        </footer>
    );
};

export default Footer;