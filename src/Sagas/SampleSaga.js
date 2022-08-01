import { put, call, select } from 'redux-saga/effects';
import SampleActions from '../Redux/SampleRedux';

import {
    ToastAndroid,
    Alert
} from 'react-native';

import ToastHandler from '../Components/ToastHandler/ToastHandler'

export function* getData(api) {
    try {
        yield put(SampleActions.setLoading({ loading: true, error: false }));
        var response = yield call(api.getCoffe);
        const { ok, data, status } = response;
        console.log("successss", response);
        if (ok && status === 200) {
            yield put(SampleActions.succesFetch({ data: data }));
        } else {
            yield put(SampleActions.errorFetch({ message: "error" }));
            ToastHandler.error("Error", "Error gan");
        }
    } catch (error) {
        console.log('ERROR Saga sample ', error.message);
        yield put(SampleActions.errorFetch({ message: "error" }));
    }
}

export function* cekData(api) {
    try {
        // yield put(SampleActions.setLoading({ loading: true, error: null }));
        var response = yield call(api.getCoffe);
        // // // yield put({});

        const { ok, data, status } = response;

        console.log("ini dari session premium saga", response);
        console.log("error api", api.api.getBaseURL());
        ToastHandler.error("Warning", "Hahaha");

        // if (ok && status === 200) {
        //     console.log("siceee", data);
        //     yield put(SampleActions.setDataSample({ data: data }));
        //     yield put(SampleActions.setLoading({ loading: false, error: null }));
        // } else {
        //     yield put(SampleActions.setDataSample({ data: [] }));
        //     yield put(SampleActions.setLoading({ loading: false, error: "error" }));
        // }
    } catch (error) {

        // console.log('ERROR Sagas.setSession wjwkwkw ', error.message);
        // yield put(SampleActions.setDataSample({ data: [] }));
        // yield put(SampleActions.setLoading({ loading: false, error: error.message }));
        //  yield put(SessionActions.setFinishLoading());
    }
}

