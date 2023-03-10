import { ProfileState, ProfileAction, ProfileTypes } from './../../types/Profile';

const initialState: ProfileState = {
    Posts: [],
    Artworks: [],
    Comments: [],
    Countries: [],
    FavoriteArtworks: [],
    LargePhoto: "",
    Avatar: "",
    Country: "",
    Gender: "",
    Bio: "",
    Login: "",
    PostsStatistics: 0,
    ArtworksStatistic: 0,
    FavoritesStatistic: 0,
    SubscriptionsStatistic: 0
};

export const ProfileReducer = (state = initialState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case ProfileTypes.GET_PROFILE_DATA:
            return { ...state,  LargePhoto: action.largePhoto, Avatar: action.avatar, Country: action.country, Gender: action.gender, Bio: action.bio, Login: action.login }
        case ProfileTypes.GET_ARTWORKS:
            return { ...state, Artworks: action.artworks }
        case ProfileTypes.GET_COMMENTS:
            return { ...state, Comments: action.comments }
        case ProfileTypes.GET_COUNTRIES:
            return { ...state, Countries: action.countries }
        case ProfileTypes.GET_POSTS:
            return { ...state, Posts: action.posts }
        case ProfileTypes.GET_STATISTIC:
            return { 
                ...state, 
                PostsStatistics: action.postsStatistic, 
                ArtworksStatistic: action.artworksStatistic, 
                FavoritesStatistic: action.favoritesStatistic, 
                SubscriptionsStatistic: action.subscriptionsStatistic 
            }
        case ProfileTypes.GET_FAVORITES:
            return { ...state, FavoriteArtworks: action.favoriteArtworks }
        default: 
            return state
    };
};