import React, { FC } from 'react';
import ProfileCenter from '../../components/Profile/ProfileCenter/ProfileCenter';
import ProfileTop from '../../components/Profile/ProfileTop/ProfileTop';

const Profile: FC = () => {
    return (
        <main className={'profile__main'}>
            <ProfileTop />
            <ProfileCenter />
        </main>
    );
};

export default Profile;