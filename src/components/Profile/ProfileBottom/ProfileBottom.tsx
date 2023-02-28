import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useProfileAction } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import s from './ProfileBottom.module.css';

const ProfileBottom: FC = () => {
    const { userLogin } = useTypedSelector(state => state.Login);
    const { getArtworks, getComments, getPosts } = useProfileAction();
    const loginProfile = window.location.pathname.slice(9);

    useEffect(() => {
        getArtworks(loginProfile);
        getComments(loginProfile);
        getPosts(userLogin);
    }, []);

    return (
        <div className={'container'}>
            <div className={s.wrapper}>
                <Outlet />
            </div>
        </div>
    );
};

export default ProfileBottom;