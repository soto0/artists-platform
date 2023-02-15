import React, { FC } from 'react';
import s from './Logo.module.css';
import { Link } from 'react-router-dom';
import LogoIcon from './../../assets/images/logo.svg';

const Logo: FC = () => {
    return (
        <Link to={''} className={s.logo}>
            <img src={LogoIcon} alt={'logo'} />
        </Link>
    );
};

export default Logo;