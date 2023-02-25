import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './User.module.css';
import avatar from './../../assets/images/avatar.svg';

interface UserProps {
    avatar: string | undefined;
    name: string | undefined;
}

const User: FC<UserProps> = (props) => {
    return (
        <Link to={'/Profile/' + props.name} className={s.user}>
            <img src={props.avatar ? props.avatar : avatar} alt={'subscriber__avatar'} className={s.user__avatar} />
            <p className={s.user__name}>{props.name}</p>
        </Link>
    );
};

export default User;