import { CategoriesAction, CategoriesTypes } from './../../types/Categories';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getCategories = () => {
    return async (dispatch: Dispatch<CategoriesAction>) => {
        const response = await axios.get('http://localhost:3001/Categories/');
        dispatch({ type: CategoriesTypes.GET_CATEGORIES, categories: response.data });
    };
};