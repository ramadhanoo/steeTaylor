import { createReducer, createActions } from 'reduxsauce';
import { DYNAMIC_THEME, notification } from '../Data/Constans';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    setNotif: ['payload'],
    reset: ['payload']
});

export const NotificationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    data: notification,
};

/* ------------- Selectors ------------- */

export const NotificationSelectors = {
    getData: state => state.notification.data,
};

/* ------------- Reducers ------------- */

export const setNotifReducer = (state, { payload }) => ({
    ...state,
    data: [
        ...payload.data,
        ...state.data
    ],
});


export const resetReducer = (state, { payload }) => ({
    ...state,
    data: [],
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_NOTIF]: setNotifReducer,
    [Types.RESET]: resetReducer
});
