import React, { FC } from 'react';
import s from './Artwork.module.css';
import test from './../../assets/images/test.jpg';
import { Link } from 'react-router-dom';
import avatar from './../../assets/images/avatar.svg';
import favorite from './../../assets/images/favorite.svg';
import like from './../../assets/images/like.svg';

const Artwork: FC = () => {
    return (
        <Link to={''} className={s.artwork}>
            <img src={test} alt={'artwork'} className={s.artwork__icon} />
            <div className={s.title}>Синие облака в 2д стиле</div>
            <div className={s.artwork__down}>
                <img src={avatar} alt={'avatar'} className={s.avatar} />
                <p className={s.name}>test</p>
                <div className={s.down__right}>
                    <p className={s.likes}>
                        0
                        <img src={favorite} alt={'favorite'} className={s.icon} />
                    </p>
                    <p className={s.favorites}>
                        0
                        <img src={like} alt={'favorite'} className={s.icon} />    
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Artwork;