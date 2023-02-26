export interface CategoryState {
    CategoryName: string | undefined;
    CategoryIcon: string | undefined;
    Artworks: string[];
};

export enum CategoryTypes {
    GET_CATEGORY_ARTWORKS = 'GET_CATEGORY_ARTWORKS',
    GET_CATEGORY = 'GET_CATEGORY'
};


interface getCategory {
    type: CategoryTypes.GET_CATEGORY,
    categoryName: string,
    categoryIcon: string
};

interface getCategoryArtworks {
    type: CategoryTypes.GET_CATEGORY_ARTWORKS,
    artworks: string[]
};

export type CategoryAction = getCategoryArtworks | getCategory;