import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    setDataSampleReq: ['payload'],
    setDataSample: ['payload'],
    setLoading: ['payload'],
    cekData: ['payload'],
    succesFetch: ['payload'],
    errorFetch: ['payload']
});

export const SampleTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
    message: ""
};

/* ------------- Selectors ------------- */

export const SampleSelectors = {
    getData: state => state.sample.data,

};

/* ------------- Reducers ------------- */

export const errorFetchReducer = (state, { payload }) => ({
    ...state,
    data: [],
    loading: false,
    error: true,
    message: payload.message
});

export const succesFetchReducer = (state, { payload }) => ({
    ...state,
    data: payload.data,
    loading: false,
    error: false,
    message: ""
});

export const cekDataReducer = (state, { payload }) => ({
    ...state,
});

export const setDataSampleReqReducer = (state, { payload }) => ({
    ...state,
});

export const setDataSampleReducer = (state, { payload }) => ({
    ...state,
    data: payload.data
});

export const setLoadingReducer = (state, { payload }) => ({
    ...state,
    loading: payload.loading,
    error: payload.error
});



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_DATA_SAMPLE_REQ]: setDataSampleReqReducer,
    [Types.SET_DATA_SAMPLE]: setDataSampleReducer,
    [Types.SET_LOADING]: setLoadingReducer,
    [Types.CEK_DATA]: cekDataReducer,
    [Types.ERROR_FETCH]: errorFetchReducer,
    [Types.SUCCES_FETCH]: succesFetchReducer
});
