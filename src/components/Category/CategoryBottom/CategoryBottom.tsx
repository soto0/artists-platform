import React, { FC, useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CategoryProps } from '../../../types/Category';
import ArtworkSmall from '../../ArtworkSmall/ArtworkSmall';
import s from './CategoryBottom.module.css';

const CategoryBottom: FC<CategoryProps> = (props) => {
    const { getArtworksCategory } = useActions();
    const { Artworks } = useTypedSelector(state => state.Category);

    useEffect(() => {
        getArtworksCategory(props.Url);
    }, []);

    return (
       <div className={s.artworks_block}>
            {
                Artworks.map((artwork: any) => {
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
    );
};

export default CategoryBottom;