import { createReducer, createActions } from 'reduxsauce';
import { DYNAMIC_THEME } from '../Data/Constans';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    changeTheme: ['payload'],
    updateThemeData: ['payload']
});

export const ThemeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    data: DYNAMIC_THEME,
    defaultTheme: "light",
    dark: false
};

/* ------------- Selectors ------------- */

export const ThemeSelectors = {
    getData: state => state.theme.data,
    getColors: state => state.theme.data[state.theme.defaultTheme]
};

/* ------------- Reducers ------------- */

export const updateThemeDataReducer = (state, { payload }) => ({
    ...state,
    data: payload.data,
});


export const changeThemeReducer = (state, { payload }) => ({
    ...state,
    defaultTheme: payload.dark == true ? 'dark' : 'light',
    dark: payload.dark,
    data: DYNAMIC_THEME
});


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CHANGE_THEME]: changeThemeReducer,
    [Types.UPDATE_THEME_DATA]: updateThemeDataReducer
});
