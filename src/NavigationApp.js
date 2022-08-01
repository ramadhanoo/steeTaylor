import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
  useColorScheme,
  Linking

} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppStoreProvider from '../src/Redux/Provider';
import { navigationRef } from '../src/Navigation/RootNavigation';
import MyStack from './Navigation';
import { Colors } from './Themes'
import { navigate } from './Navigation/RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import Login from './Screens/Login/Login';
import Notification from './Screens/Notification/Notification';

function App() {

  useEffect(() => {
  }, [])


  const scheme = useColorScheme();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: scheme == "dark" ? Colors.black : Colors.white
    },
  };

  const config = {
    screens: {
      Notification: "notification",
      Login: "login"
    }
  }


  const Stack = createNativeStackNavigator();

  return (
    <AppStoreProvider>
      <NavigationContainer theme={MyTheme} ref={navigationRef}>
          <MyStack />
        <Toast />
      </NavigationContainer>
    </AppStoreProvider>
  );
}

export default App;