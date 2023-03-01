import axios from 'axios';
import { Dispatch } from 'redux';
import { ArtworkAction, ArtworkTypes } from "../../types/Artwork"

export const getArtwork = (artworkId: string | number) => {
    return async (dispatch: Dispatch<ArtworkAction>) => {
        const response = await axios.get('http://localhost:3001/Artworks?id=' + artworkId);
        const commentsResponse = await axios.get('http://localhost:3001/ArtworkComments?artworkId=' + artworkId)
        dispatch({ type: ArtworkTypes.GET_ARTWORK, artwork: response.data[0], artworkComments: commentsResponse.data });
    };
};