/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavigationApp from './src/NavigationApp';

AppRegistry.registerComponent(appName, () => NavigationApp);
