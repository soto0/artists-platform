export interface CategoriesState {
    Categories: []
};

export enum CategoriesTypes {
    GET_CATEGORIES = 'GET_CATEGORIES'
};

interface getCategories {
    type: CategoriesTypes.GET_CATEGORIES;
    categories: []
};

export type CategoriesAction = getCategories;