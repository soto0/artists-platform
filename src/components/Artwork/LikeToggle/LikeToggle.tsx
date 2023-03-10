import axios from 'axios';
import React, { FC } from 'react';
import s from './../Artwork.module.css';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';


interface LikeToggleProps {
    GetLikeArtwork: any,
    ArtworkId: string,
    UserLogin: string | undefined,
    GetLikeArtworkCount: any
}

const LikeToggle: FC<LikeToggleProps> = (props) => {
    const { LikeArtwork, LikeArtworkCount } = useTypedSelector(state => state.Like);
    const navigate = useNavigate();
    
    const LikeArtworkToggle = async () => {
        if (!props.UserLogin) {
            navigate('/Login');
        } else if (!LikeArtwork?.like) {
            await axios.post('http://localhost:3001/LikeArtworks', { artworkId: props.ArtworkId, userLogin: props.UserLogin, like: true });

            props.GetLikeArtwork(props.ArtworkId, props.UserLogin);
            props.GetLikeArtworkCount(props.ArtworkId);
        } else if (LikeArtwork.like === false && LikeArtwork.userLogin !== props.UserLogin) {
            await axios.post('http://localhost:3001/LikeArtworks', { artworkId: props.ArtworkId, userLogin: props.UserLogin, like: true  });

            props.GetLikeArtwork(props.ArtworkId, props.UserLogin);
            props.GetLikeArtworkCount(props.ArtworkId);
        } else {
            await axios.delete('http://localhost:3001/LikeArtworks/' + LikeArtwork.id);
            
            props.GetLikeArtwork();
            props.GetLikeArtworkCount(props.ArtworkId);
        }
    };

    return (
        <div className={s.like__block}>
            <p>{LikeArtworkCount}</p>
            <svg width="25px" height="25px" viewBox="0 0 24 24">
                <path className={LikeArtwork?.like && props.UserLogin === LikeArtwork.userLogin ? s.like_active : s.like} onClick={LikeArtworkToggle} d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" />
            </svg>
        </div>
    );
};

export default LikeToggle;