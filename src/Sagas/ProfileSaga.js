import { put, call, select } from 'redux-saga/effects';
import ProfileActions from '../Redux/SampleRedux';

import {
    ToastAndroid,
    Alert
} from 'react-native'

export function* cekDataProf(api) {
    try {
        // yield put(ProfileActions.setLoading({ loading: true, fail: null }));
        var response = yield call(api.getCoffe);
        // // // yield put({});

        const { ok, data, status } = response;

        console.log("ini dari session premium saga", response)
        console.log("error api", api.api.getBaseURL())

        // if (ok && status === 200) {
        //     console.log("siceee", data);
        //     yield put(ProfileActions.setDataSample({ data: data }));
        //     yield put(ProfileActions.setLoading({ loading: false, fail: null }));
        // } else {
        //     yield put(ProfileActions.setDataSample({ data: [] }));
        //     yield put(ProfileActions.setLoading({ loading: false, fail: "error" }));
        // }
    } catch (error) {

        // console.log('ERROR Sagas.setSession wjwkwkw ', error.message);
        // yield put(ProfileActions.setDataSample({ data: [] }));
        // yield put(ProfileActions.setLoading({ loading: false, fail: error.message }));
        //  yield put(SessionActions.setFinishLoading());
    }
}

