import { takeLatest, all, takeEvery } from 'redux-saga/effects';

/* ------------- Types ------------- */
import Api from '../Services/Api';

import { StartupTypes } from '../Redux/StartupRedux';
import { SampleTypes } from '../Redux/SampleRedux';
import { ProfileTypes } from '../Redux/ProfileRedux';

import { startup } from './StartupSagas';

import {
  getData,
  cekData
} from './SampleSaga'

import {
  cekDataProf
} from './ProfileSaga';


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = Api.create();


/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(SampleTypes.SET_DATA_SAMPLE_REQ, getData, api),
    takeLatest(SampleTypes.CEK_DATA, cekData, api),

    takeLatest(ProfileTypes.CEK_DATA_PROFILE, cekDataProf, api)

    // some sagas receive extra parameters in addition to an action
    // takeLatest(SampleTypes.SAMPLE_REQUEST, SampleAction)


  ]);
}
