import { CategoryAction, CategoryTypes } from './../../types/Category';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getCategory = (category: string) => {
    return async (dispatch: Dispatch<CategoryAction>) => {
        const response = await axios.get('http://localhost:3001/Categories?categoryTitle=' + category);
        dispatch({ type: CategoryTypes.GET_CATEGORY, categoryName: response.data[0].categoryTitle, categoryIcon: response.data[0].categoryIcon })
    }
}

export const getArtworksCategory = (category: string) => {
    return async (dispatch: Dispatch<CategoryAction>) => {
        const response = await axios.get('http://localhost:3001/Artworks?category=' + category);
        dispatch({ type: CategoryTypes.GET_CATEGORY_ARTWORKS, artworks: response.data });
    };
};