import { persistStore } from 'redux-persist';
import REDUX_PERSIST from '../Config/ReduxPersist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StartupActions from '../Redux/StartupRedux';

import Api from './Api';


const updateReducers = async (store) => {
  const { reducerVersion } = REDUX_PERSIST;
  console.log("halooo", reducerVersion)
  const startup = () => store.dispatch(StartupActions.startup());
  AsyncStorage.getItem('reducerVersion')
    .then((localVersion) => {
      console.log({ localVersion, reducerVersion });
      if (localVersion !== reducerVersion) {
        console.log('PERSIST VERSION CHANGES');
        //Purge store
        persistStore(store, null, startup).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, null, startup);
      }
    })
    .catch(() => {
      persistStore(store, null, startup);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};


const autoLogout = async (store) => {

  const api = Api.create();
  console.log("apuiii", api)
}

export default { updateReducers, autoLogout };
