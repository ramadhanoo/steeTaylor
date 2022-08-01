import AsyncStorage from '@react-native-async-storage/async-storage';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '0.2',
  storeConfig: {
    key: 'root',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    // blacklist: ['login', 'search', 'nav'],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: ['lang', 'theme', 'session', 'notification'],
  },
};

export default REDUX_PERSIST;
