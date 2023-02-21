import React, { FC } from 'react';
import s from './Artwork.module.css';
import { Link } from 'react-router-dom';
import favorite from './../../assets/images/favorite.svg';
import like from './../../assets/images/like.svg';

interface ArtworkProps {
    name: string | undefined,
    artworkName: string,
    artworkImage: string,
    avatar: string | undefined
}

const Artwork: FC<ArtworkProps> = (props) => {
    return (
        <Link to={''} className={s.artwork}>
            <img src={props.artworkImage} alt={'artwork'} className={s.artwork__icon} />
            <p className={s.title}>{props.artworkName}</p>
            <div className={s.artwork__down}>
                <img src={props.avatar} alt={'avatar'} className={s.avatar} />
                <p className={s.name}>{props.name}</p>
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