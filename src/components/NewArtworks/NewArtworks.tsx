import React, { FC, useEffect } from 'react';
import { useNewAction } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ArtworkSmall from '../ArtworkSmall/ArtworkSmall';
import s from './NewArtworks.module.css';

const NewArtworks: FC = () => {
    const { getNewArtworks } = useNewAction();
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
                                <ArtworkSmall name={artwork.login} artworkName={artwork.artworkName} artworkImage={artwork.artworkImage} avatar={artwork.avatar} id={artwork.id} />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default NewArtworks;