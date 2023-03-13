import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ArtworkSmall from '../ArtworkSmall/ArtworkSmall';
import s from './NewArtworks.module.css';

const NewArtworks: FC = () => {
    const { getNewArtworks } = useActions();
    const { NewArtworks } = useTypedSelector(state => state.New);

    useEffect(() => {
        getNewArtworks();
    }, []);

    return (
        <main>
            <div className={'container'}>
                <h3 className={s.title}>Новый работы</h3>
                <div className={s.new__block}>
                    {
                        NewArtworks.map((artwork: any) => {
                            return (
                                <ArtworkSmall 
                                    Name={artwork.login} 
                                    ArtworkName={artwork.artworkName} 
                                    ArtworkImage={artwork.artworkImage} 
                                    Avatar={artwork.avatar} 
                                    Id={artwork.id} 
                                />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default NewArtworks;