import { SubscriptionsAction, SubscriptionsTypes } from './../../types/Follow';
import axios from 'axios';
import { Dispatch } from 'redux';

export const getSubscription = (userLogin: string | undefined, user: string | undefined) => {
    return async (dispatch: Dispatch<SubscriptionsAction>) => { 
        const response = await axios.get('http://localhost:3001/Subscriptions?userLogin=' + userLogin + '&user=' + user);
        const SubscriptionData = response.data.find((item: any) => item.userLogin === userLogin && item.user === user);
        dispatch({ type: SubscriptionsTypes.GET_SUBSCRIPTIONS, subscriptions: SubscriptionData });
    };
};