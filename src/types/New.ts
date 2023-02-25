export interface NewState {
    New: []
};

export enum NewTypes {
    GET_NEW = 'GET_NEW'
};

interface getNew {
    type: NewTypes.GET_NEW;
    new: [];
};

export type NewAction = getNew;