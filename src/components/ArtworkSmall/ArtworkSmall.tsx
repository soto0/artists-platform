import React, { FC } from 'react';
import s from './ArtworkSmall.module.css';
import { Link } from 'react-router-dom';
import avatar from './../../assets/images/avatar.svg';

interface ArtworkSmallProps {
    Name: string | undefined,
    ArtworkName: string,
    ArtworkImage: string,
    Avatar: string | undefined,
    Id?: number,
};

const ArtworkSmall: FC<ArtworkSmallProps> = (props) => {
    return (
        <div className={s.artwork}>
            <Link to={'/Artwork/' + props.Id}>
                <img src={props.ArtworkImage} alt={'artwork'} className={s.artwork__icon} />
            </Link>
            <p className={s.title}>{props.ArtworkName}</p>
            <div className={s.artwork__down}>
                <Link to={'/Profile/' + props.Name}>
                    <img src={props.Avatar ? props.Avatar : avatar} alt={'avatar'} className={s.avatar} />
                </Link>
                <p className={s.name}>{props.Name}</p>
                <div className={s.down__right}>
                </div>
            </div>
        </div>
    );
};

export default ArtworkSmall;