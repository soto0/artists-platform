import React, { FC } from 'react';
import Main from '../../components/main/Main';
import PopularArtists from '../../components/PopularArtists/PopularArtist';

const MainPage: FC = () => {
    return (
        <main>
            <div className={'container'}>
                <Main />
                <PopularArtists />
            </div>
        </main>
    );
};

export default MainPage;