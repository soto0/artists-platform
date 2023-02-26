import { CategoryAction, CategoryState, CategoryTypes } from './../../types/Category';

const initialState: CategoryState = {
    CategoryName: '',
    CategoryIcon: '',
    Artworks: []
};

export const CategoryReducer = (state = initialState, action: CategoryAction): CategoryState => {
    switch (action.type) {
        case CategoryTypes.GET_CATEGORY:
            return { ...state, CategoryName: action.categoryName, CategoryIcon: action.categoryIcon }
        case CategoryTypes.GET_CATEGORY_ARTWORKS:
            return { ...state, Artworks: action.artworks }
        default:
            return state
    };
};