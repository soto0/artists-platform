import React, { FC } from 'react';
import s from './ArtworkSmall.module.css';
import { Link } from 'react-router-dom';
import avatar from './../../assets/images/avatar.svg';

interface ArtworkSmallProps {
    name: string | undefined,
    artworkName: string,
    artworkImage: string,
    avatar: string | undefined,
    id?: number,
}

const ArtworkSmall: FC<ArtworkSmallProps> = (props) => {
    return (
        <div className={s.artwork}>
            <Link to={'/Artwork/' + props.id}>
                <img src={props.artworkImage} alt={'artwork'} className={s.artwork__icon} />
            </Link>
            <p className={s.title}>{props.artworkName}</p>
            <div className={s.artwork__down}>
                <img src={props.avatar ? props.avatar : avatar} alt={'avatar'} className={s.avatar} />
                <p className={s.name}>{props.name}</p>
                <div className={s.down__right}>
                </div>
            </div>
        </div>
    );
};

export default ArtworkSmall;