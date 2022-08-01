import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    cekDataProfile: ['payload']
});

export const ProfileTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    data: [],
    loading: false,
    fail: null,
};

/* ------------- Selectors ------------- */

export const ProfileSelectors = {
    getData: state => state.profile.data,

};

/* ------------- Reducers ------------- */


export const cekDataProfileReducer = (state, { payload }) => ({
    ...state,
});




/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CEK_DATA_PROFILE]: cekDataProfileReducer
});
