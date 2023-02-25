import { CategoriesState, CategoriesAction, CategoriesTypes } from './../../types/Categories';

const initialState: CategoriesState = {
    Categories: []
};

export const CategoriesReducer = (state = initialState, action: CategoriesAction): CategoriesState => {
    switch (action.type) {
        case CategoriesTypes.GET_CATEGORIES:
            return { ...state, Categories: action.categories }
        default:
            return state
    }
}