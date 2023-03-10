import { SubscriptionsState, SubscriptionsTypes, SubscriptionsAction } from './../../types/Follow';

const initialState: SubscriptionsState = {
    Subscriptions: [],
};

export const SubscriptionsReducer = (state = initialState, action: SubscriptionsAction): SubscriptionsState => {
    switch (action.type) {
        case SubscriptionsTypes.GET_SUBSCRIPTIONS:
            return { ...state, Subscriptions: action.subscriptions }
        default:
            return state
    };
};