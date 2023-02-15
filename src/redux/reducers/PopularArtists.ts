import { PopularArtistsState, PopularArtistsTypes, PopularArtistsActions } from "../../types/popularArtists";

const initialState: PopularArtistsState = {
    popularArtists: []
};

export const PopularArtistsReducer = (state = initialState, action: PopularArtistsActions): PopularArtistsState => {
    switch (action.type) {
        case PopularArtistsTypes.GET_POPULAR_ARTISTS:
            return { popularArtists: action.payload }
        default:
            return state
    };
};