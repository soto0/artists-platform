import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const ProfileBottom: FC = () => {
    return (
        <div className={'container'}>
            <div className={'wrapper'}>
                <Outlet />
            </div>
        </div>
    );
};

export default ProfileBottom;