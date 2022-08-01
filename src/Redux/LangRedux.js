import { createReducer, createActions } from 'reduxsauce';
import { LANG } from '../Data/Constans';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    changeLang: ['payload'],
    updateLangData: ['payload']
});

export const LangTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    data: LANG,
    defaultLang: "eng"
};

/* ------------- Selectors ------------- */

export const LangSelectors = {
    getData: state => state.lang.data,

};

/* ------------- Reducers ------------- */

export const updateLangDataReducer = (state, { payload }) => ({
    ...state,
    data: payload.data
});

export const changeLangReducer = (state, { payload }) => ({
    ...state,
    defaultLang: payload.lang
});




/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CHANGE_LANG]: changeLangReducer,
    [Types.UPDATE_LANG_DATA]: updateLangDataReducer
});
