import { put, call, select } from 'redux-saga/effects';
import StackComponent from '../Navigation/StackComponent';
import ProfileActions from '../Redux/ProfileRedux';
import NavigationServices from '../Navigation/NavigationServices';
import SessionActions, { SessionSelectors } from '../Redux/SessionRedux'
import User from '../Model/User';
import {
  ToastAndroid,
  Alert
} from 'react-native'

export function* setSession(api, { token }) {
  try {
    api.api.setHeaders({
      Authorization: `Bearer ${token}`,
      // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMSwiZGV2aWNlX2lkIjoxLCJpYXQiOjE2MTgyMjE0NTEsImV4cCI6MTYxODgyNjI1MX0.WBZRNwGl3AUSwkzGf5v0AtvCGBofGYvfap4rAXt0k5s',
    });
    // yield put({});
    yield put(ProfileActions.getProfileRequest());
    // StackComponent.setRootMain();
  } catch (error) {
    console.tron.log('ERROR Sagas.setSession ', error.message);
  }
}


export function* setUser(api, { token }) {
  try {
    const baseUrl = yield select(SessionSelectors.getBaseUrl)

    var header = {
      token: token.access_token
    }

    console.log("dari session saga", baseUrl)

    if (baseUrl != null) {
      api.api.setBaseURL(baseUrl);
      console.log("ubah plis");
    }

    yield put(SessionActions.setLoading());
    var response = yield call(api.setUserdata, header);
    // yield put({});
    console.log("ini dari session saga", response)
    const { ok, data, status } = response;

    if (ok && status === 200) {
      console.log("berhasil");
      yield put(SessionActions.setAccount(data));
      yield put(SessionActions.setFinishLoading());
    } else {
      console.log("gagal")
      yield put(SessionActions.setFinishLoading());
      //throw { message_title: "Warning", message: "Login not valid" };
    }
  } catch (error) {
    //console.tron.log('ERROR Sagas.setSession ', error.message);
    yield put(SessionActions.setFinishLoading());
  }
}

export function* setTravelAgentData(api, { }) {
  try {
    const baseUrl = yield select(SessionSelectors.getBaseUrl)
    var token = yield select(SessionSelectors.getToken);

    var dataReq = {
      token: token.access_token
    }

    console.log("dari session saga agent", baseUrl)

    if (baseUrl != null) {
      api.api.setBaseURL(baseUrl);
    }

    yield put(SessionActions.setLoadingTravelAgent({ loading: true }));
    var response = yield call(api.getTravelAgent, dataReq);
    console.log("ini response berhasil", response);

    const { ok, data, status } = response;


    if (ok && status === 200) {

      yield put(SessionActions.setLoadingTravelAgent({ loading: false }));

      var dataTravel = data.filter((item, index) => {
        // if (item.Disabled == false) {
        //   return item;
        // }

        return item;
      });

      console.log("ini data travell", data);
      console.log("berhasil", data);
      yield put(SessionActions.setDataTravelAgent({ data: dataTravel.length ==  0 ? null : dataTravel[0] }));
    } else {
      yield put(SessionActions.setLoadingTravelAgent({ loading: false }));
      console.log("gagal ahahahaha")
      yield put(SessionActions.setDataTravelAgent({ data: null }));

      throw { message_title: "Warning", message: "Login not valid" };
    }
  } catch (error) {
    //console.log("error travel agent ", error)
    yield put(SessionActions.setDataTravelAgent({ data: null }));
    //console.log('ERROR Sagas.setSession wjwkwkw ', error.message);
    yield put(SessionActions.setLoadingTravelAgent({ loading: false }));
  }
}

export function* setUserPremium(api, { token }) {
  try {
    const baseUrl = yield select(SessionSelectors.getBaseUrl)

    var header = {
      token: token.access_token
    }

    console.log("dari session saga", baseUrl)
    console.log("ini token nya", token)

    if (baseUrl != null) {
      api.api.setBaseURL(baseUrl);
    }

    //yield put(SessionActions.setLoading());
    var response = yield call(api.setUserdata, header);
    // // yield put({});

    const { ok, data, status } = response;
    console.log("ini dari session premium saga", data)

    if (ok && status === 200) {
      console.log("berhasil", data);
      yield put(SessionActions.setAccount(data));
      yield put(SessionActions.setFinishLoading());
      //NavigationServices.push("auth.completeData");
    } else {
      console.log("gagal ahahahaha")
      yield put(SessionActions.setFinishLoading());
      throw { message_title: "Warning", message: "Login not valid" };
    }
  } catch (error) {

    console.log('ERROR Sagas.setSession wjwkwkw ', error.message);
    yield put(SessionActions.setFinishLoading());
  }
}

export function clearSession(api) {
  api.api.setHeaders({
    Authorization: '',
  });
  StackComponent.setRootAuth();
}
