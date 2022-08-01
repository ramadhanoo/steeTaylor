import { createReducer, createActions } from 'reduxsauce';
import { LANG, Users } from '../Data/Constans';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  clearSession: null,
  login: ['payload'],
  setSession: ['payload']
});

export const SessionTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  isLogged: false,
  data: Users
};

/* ------------- Selectors ------------- */

export const SessionSelectors = {
  isLogged: state => state.session.isLogged,
  getSession: state => state.session,
  getUser: state => state.session
};

/* ------------- Reducers ------------- */

export const clearSessionReducer = state => ({
  ...state,
  isLogged: false,
});

export const loginReducer = state => ({
  ...state,
  isLogged: true,
});


export const setSessionReducer = (state, { payload }) => ({
  ...state,
  data: payload.data
});


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLEAR_SESSION]: clearSessionReducer,
  [Types.LOGIN]: loginReducer,
  [Types.SET_SESSION]: setSessionReducer
});
