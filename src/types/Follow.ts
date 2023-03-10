export interface SubscriptionsState {
    Subscriptions: any,
};

export enum SubscriptionsTypes {
    GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS',
};

interface getSubscriptions {
    type: SubscriptionsTypes.GET_SUBSCRIPTIONS,
    subscriptions: any
};

export type SubscriptionsAction = getSubscriptions;