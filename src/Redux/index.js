/* eslint-disable global-require */
/* eslint-disable import/no-self-import */
import { resettableReducer } from 'reduxsauce';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import rootSaga from '../Sagas/index';

import REDUX_PERSIST from '../Config/ReduxPersist';
import configureStore from './CreateStore';

const resettable = resettableReducer('RESET');

export const reducers = combineReducers({
    session: resettable(require('./SessionRedux').reducer),
    sample: resettable(require('./SampleRedux').reducer),
    profile: resettable(require('./ProfileRedux').reducer),
    lang: resettable(require('./LangRedux').reducer),
    theme: resettable(require('./ThemeRedux').reducer),
    notification: resettable(require('./NotificationRedux').reducer),
    
});

export default () => {
  let finalReducers = reducers;

  if (REDUX_PERSIST.active) {
    finalReducers = persistReducer(REDUX_PERSIST.storeConfig, reducers);
  }

  // eslint-disable-next-line prefer-const
  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga,
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('.').reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../Sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas);
      });
    });
  }

  return store;
};