import axios from 'axios';
import { Dispatch } from 'redux';
import { ArtworkAction, ArtworkTypes } from "../../types/Artwork"

export const getArtwork = (artworkId: string) => {
    return async (dispatch: Dispatch<ArtworkAction>) => {
        const response = await axios.get('http://localhost:3001/Artworks?id=' + artworkId);
        dispatch({ type: ArtworkTypes.GET_ARTWORK, artwork: response.data[0]});
    }
}