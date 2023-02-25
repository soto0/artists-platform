import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useProfileAction } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import s from './ProfileBottom.module.css';

const ProfileBottom: FC = () => {
    const { userLogin } = useTypedSelector(state => state.Login);
    const { Login } = useTypedSelector(state => state.Profile);
    const { getArtworks, getComments, getPosts } = useProfileAction();

    useEffect(() => {
        getArtworks(userLogin);
        getComments(Login);
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