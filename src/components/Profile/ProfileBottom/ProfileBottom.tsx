import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import s from './ProfileBottom.module.css';

const ProfileBottom: FC = () => {
    return (
        <div className={'container'}>
            <div className={s.wrapper}>
                <Outlet />
            </div>
        </div>
    );
};

export default ProfileBottom;