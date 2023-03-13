import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './User.module.css';
import avatar from './../../assets/images/avatar.svg';

interface UserProps {
    Avatar: string | undefined;
    Name: string | undefined;
}

const User: FC<UserProps> = (props) => {
    return (
        <Link to={'/Profile/' + props.Name} className={s.user}>
            <img src={props.Avatar ? props.Avatar : avatar} alt={'subscriber__avatar'} className={s.user__avatar} />
            <p className={s.user__name}>{props.Name}</p>
        </Link>
    );
};

export default User;