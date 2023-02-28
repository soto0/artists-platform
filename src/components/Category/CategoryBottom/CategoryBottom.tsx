import React, { FC, useEffect } from 'react';
import { useCategoryAction } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ArtworkSmall from '../../ArtworkSmall/ArtworkSmall';
import s from './CategoryBottom.module.css';

const CategoryBottom: FC = () => {
    const { getArtworksCategory } = useCategoryAction();
    const { Artworks } = useTypedSelector(state => state.Category);

    useEffect(() => {
        const url = window.location.pathname.slice(12);
        getArtworksCategory(url);
    }, [])

    return (
       <div className={s.artworks_block}>
            {
                Artworks.map((artwork: any) => {
                    return (
                        <ArtworkSmall name={artwork.name} artworkName={artwork.artworkName} artworkImage={artwork.artworkImage} avatar={artwork.avatar} id={artwork.id} />
                    )
                })
            }
       </div>
    );
};

export default CategoryBottom;